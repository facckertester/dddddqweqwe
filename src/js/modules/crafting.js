// src/js/modules/crafting.js
class CraftingModule {
    constructor(game) {
        this.game = game;
        this.activeCrafts = new Map(); // Для отслеживания таймеров
    }
    
    // Получить доступные чертежи
    getAvailableBlueprints() {
        return Object.values(BLUEPRINTS).filter(blueprint => 
            this.game.state.inventory.blueprints.includes(blueprint.id) &&
            this.game.player.level >= blueprint.requiredLevel
        );
    }
    
    // Проверить, достаточно ли ресурсов
    hasEnoughResources(blueprintId, materialOverrides = {}) {
        const blueprint = BLUEPRINTS[blueprintId];
        if (!blueprint) return false;
        
        for (const material of blueprint.materials) {
            const resourceId = materialOverrides[material.resourceId] || material.resourceId;
            const requiredAmount = materialOverrides[material.resourceId] ? 
                materialOverrides.amount || material.amount : material.amount;
            
            const available = this.game.inventory.resources[resourceId] || 0;
            if (available < requiredAmount) {
                return false;
            }
        }
        return true;
    }
    
    // Начать крафт
    startCrafting(blueprintId, materialOverrides = {}) {
        if (!this.hasEnoughResources(blueprintId, materialOverrides)) {
            this.game.ui.showNotification('Недостаточно ресурсов!', 'error');
            return false;
        }
        
        const blueprint = BLUEPRINTS[blueprintId];
        
        // Списать ресурсы
        for (const material of blueprint.materials) {
            const resourceId = materialOverrides[material.resourceId] || material.resourceId;
            const amount = materialOverrides[material.resourceId] ? 
                materialOverrides.amount || material.amount : material.amount;
            
            this.game.removeResource(resourceId, amount);
        }
        
        // Создать запись о крафте
        const craftId = 'craft_' + Date.now();
        const craft = {
            id: craftId,
            blueprintId,
            startTime: Date.now(),
            finishTime: Date.now() + (blueprint.timeToCraft * 1000),
            materialOverrides,
            qualityBonus: 1.0 // Будет установлено после мини-игры
        };
        
        this.game.forge.activeCrafts.push(craft);
        
        // Запустить таймер
        const timer = setTimeout(() => {
            this.finishCrafting(craftId);
        }, blueprint.timeToCraft * 1000);
        
        this.activeCrafts.set(craftId, timer);
        
        this.game.ui.showNotification(`Начата ковка: ${blueprint.name}`, 'info');
        this.game.ui.updateActiveCrafts(this.game.forge.activeCrafts);
        
        return craftId;
    }
    
    // Завершить крафт
    finishCrafting(craftId) {
        const craftIndex = this.game.forge.activeCrafts.findIndex(c => c.id === craftId);
        if (craftIndex === -1) return;
        
        const craft = this.game.forge.activeCrafts[craftIndex];
        const blueprint = BLUEPRINTS[craft.blueprintId];
        
        // Удалить из активных крафтов
        this.game.forge.activeCrafts.splice(craftIndex, 1);
        
        // Создать предмет
        const item = this.generateItem(blueprint, craft.qualityBonus);
        
        // Добавить предмет в инвентарь
        this.game.addItem(item);
        
        // Добавить опыт
        const expGained = this.calculateCraftingExp(blueprint, item.quality);
        this.game.modules.progression.addExp(expGained, blueprint.type === 'weapon' ? 'weaponsmith' : 'armorsmith');
        
        // Удалить таймер
        this.activeCrafts.delete(craftId);
        
        this.game.ui.showNotification(`Создан предмет: ${item.name} (${QUALITIES[item.quality-1].name})`, 'success');
        this.game.ui.updateActiveCrafts(this.game.forge.activeCrafts);
        
        return item;
    }
    
    // Сгенерировать предмет
    generateItem(blueprint, qualityBonus = 1.0) {
        const itemId = 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        
        // Определить качество (временная упрощенная версия)
        const qualityRoll = Math.random();
        let quality = 2; // Обычное по умолчанию
        
        if (qualityRoll < 0.1) quality = 1; // Хлам 10%
        else if (qualityRoll < 0.7) quality = 2; // Обычное 60%
        else if (qualityRoll < 0.9) quality = 3; // Хорошее 20%
        else if (qualityRoll < 0.98) quality = 4; // Превосходное 8%
        else quality = 5; // Шедевр 2%
        
        // Применить бонус качества от мини-игры
        quality = Math.min(5, Math.max(1, Math.round(quality * qualityBonus)));
        
        // Генерация базовых статов
        const stats = {};
        for (const [statName, statConfig] of Object.entries(blueprint.baseStats)) {
            const baseValue = statConfig.base;
            const variance = statConfig.variance || 0;
            const randomVariance = (Math.random() * 2 - 1) * variance;
            let value = baseValue + randomVariance;
            
            // Применить множитель качества
            value *= CONFIG.QUALITY_MULTIPLIERS[quality - 1];
            
            // Округлить
            stats[statName] = Math.round(value * 10) / 10;
        }
        
        // Шанс зачарования (упрощенный)
        const enchantments = [];
        const hasMagicMaterial = Object.keys(craft?.materialOverrides || {}).some(
            id => RESOURCES[id]?.type === 'magic'
        );
        
        let enchantChance = CONFIG.BASE_ENCHANT_CHANCE;
        if (hasMagicMaterial) enchantChance += 0.15;
        enchantChance += this.game.player.skills.enchanter.level * 0.02;
        
        if (Math.random() < enchantChance) {
            const enchTypes = Object.keys(ENCHANTMENTS);
            const randomEnch = ENCHANTMENTS[enchTypes[Math.floor(Math.random() * enchTypes.length)]];
            
            const value = randomEnch.minValue + Math.random() * (randomEnch.maxValue - randomEnch.minValue);
            enchantments.push({
                type: randomEnch.name,
                school: randomEnch.name.toLowerCase(),
                value: Math.round(value),
                description: randomEnch.description
            });
        }
        
        // Создать объект предмета
        const item = {
            id: itemId,
            name: `${QUALITIES[quality-1].name} ${blueprint.name}`,
            baseName: blueprint.name,
            type: blueprint.type,
            subtype: blueprint.subtype,
            quality: quality,
            stats: stats,
            enchantments: enchantments,
            value: this.calculateItemValue(stats, quality, enchantments),
            createdAt: Date.now()
        };
        
        return item;
    }
    
    // Расчет опыта за крафт
    calculateCraftingExp(blueprint, quality) {
        const baseExp = blueprint.timeToCraft / 10;
        const qualityMultiplier = CONFIG.QUALITY_MULTIPLIERS[quality - 1];
        return Math.round(baseExp * qualityMultiplier * CONFIG.CRAFT_EXP_MULTIPLIER);
    }
    
    // Расчет стоимости предмета
    calculateItemValue(stats, quality, enchantments) {
        let value = 0;
        
        // Базовая стоимость за статы
        if (stats.damageMin && stats.damageMax) {
            value += (stats.damageMin + stats.damageMax) * 5;
        }
        if (stats.armor) {
            value += stats.armor * 8;
        }
        
        // Множитель качества
        value *= CONFIG.QUALITY_MULTIPLIERS[quality - 1];
        
        // Добавка за зачарования
        enchantments.forEach(ench => {
            value += ench.value * 20;
        });
        
        return Math.round(value);
    }
    
    // Отменить крафт
    cancelCrafting(craftId) {
        const craftIndex = this.game.forge.activeCrafts.findIndex(c => c.id === craftId);
        if (craftIndex === -1) return false;
        
        const craft = this.game.forge.activeCrafts[craftIndex];
        const timer = this.activeCrafts.get(craftId);
        
        if (timer) {
            clearTimeout(timer);
            this.activeCrafts.delete(craftId);
        }
        
        // Вернуть 50% ресурсов
        const blueprint = BLUEPRINTS[craft.blueprintId];
        for (const material of blueprint.materials) {
            const amountToReturn = Math.ceil(material.amount * 0.5);
            this.game.addResource(material.resourceId, amountToReturn);
        }
        
        this.game.forge.activeCrafts.splice(craftIndex, 1);
        this.game.ui.updateActiveCrafts(this.game.forge.activeCrafts);
        this.game.ui.showNotification('Ковка отменена. Возвращено 50% ресурсов.', 'warning');
        
        return true;
    }
}