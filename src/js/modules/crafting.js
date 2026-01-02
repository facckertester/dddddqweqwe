// src/js/modules/crafting.js
class CraftingModule {
    constructor(game) {
        this.game = game;
        this.activeCrafts = new Map(); // Для отслеживания таймеров
    }
    
    // Получить доступные чертежи
    getAvailableBlueprints() {
        // Проверяем существование необходимых объектов
        if (!BLUEPRINTS || !this.game.state || !this.game.state.inventory) {
            return [];
        }
        
        return Object.values(BLUEPRINTS).filter(blueprint => {
            const hasBlueprint = this.game.state.inventory.blueprints && 
                                this.game.state.inventory.blueprints.includes(blueprint.id);
            const hasLevel = this.game.player && this.game.player.level >= blueprint.requiredLevel;
            return hasBlueprint && hasLevel;
        });
    }
    
    // Проверить, достаточно ли ресурсов
    hasEnoughResources(blueprintId, materialOverrides = {}) {
        const blueprint = BLUEPRINTS[blueprintId];
        if (!blueprint) return false;
        
        for (const material of blueprint.materials) {
            const resourceId = material.resourceId;
            const requiredAmount = material.amount;
            
            // Проверяем наличие ресурса в инвентаре
            const available = this.game.inventory && 
                             this.game.inventory.resources && 
                             this.game.inventory.resources[resourceId] || 0;
            
            if (available < requiredAmount) {
                return false;
            }
        }
        return true;
    }
    
    // Начать крафт
    startCrafting(blueprintId, materialOverrides = {}) {
        if (!this.hasEnoughResources(blueprintId, materialOverrides)) {
            if (this.game.ui && this.game.ui.showNotification) {
                this.game.ui.showNotification('Недостаточно ресурсов!', 'error');
            }
            return false;
        }
        
        const blueprint = BLUEPRINTS[blueprintId];
        if (!blueprint) return false;
        
        // Списать ресурсы
        for (const material of blueprint.materials) {
            const resourceId = material.resourceId;
            const amount = material.amount;
            
            this.game.removeResource(resourceId, amount);
        }
        
        // Создать запись о крафте
        const craftId = 'craft_' + Date.now();
        const craft = {
            id: craftId,
            blueprintId,
            startTime: Date.now(),
            finishTime: Date.now() + (blueprint.timeToCraft * 1000),
            materialOverrides: materialOverrides || {},
            qualityBonus: 1.0 // Будет установлено после мини-игры
        };
        
        if (!this.game.forge.activeCrafts) {
            this.game.forge.activeCrafts = [];
        }
        
        this.game.forge.activeCrafts.push(craft);
        
        // Запустить таймер
        const timer = setTimeout(() => {
            this.finishCrafting(craftId);
        }, blueprint.timeToCraft * 1000);
        
        this.activeCrafts.set(craftId, timer);
        
        if (this.game.ui) {
            if (this.game.ui.showNotification) {
                this.game.ui.showNotification(`Начата ковка: ${blueprint.name}`, 'info');
            }
            if (this.game.ui.updateActiveCrafts) {
                this.game.ui.updateActiveCrafts(this.game.forge.activeCrafts);
            }
        }
        
        return craftId;
    }
    
    // Завершить крафт
    finishCrafting(craftId) {
        if (!this.game.forge.activeCrafts) return;
        
        const craftIndex = this.game.forge.activeCrafts.findIndex(c => c.id === craftId);
        if (craftIndex === -1) return;
        
        const craft = this.game.forge.activeCrafts[craftIndex];
        const blueprint = BLUEPRINTS[craft.blueprintId];
        
        if (!blueprint) {
            console.error('Чертеж не найден:', craft.blueprintId);
            return;
        }
        
        // Удалить из активных крафтов
        this.game.forge.activeCrafts.splice(craftIndex, 1);
        
        // Создать предмет - передаем materialOverrides
        const item = this.generateItem(blueprint, craft.materialOverrides || {}, craft.qualityBonus || 1.0);
        
        if (item) {
            // Добавить предмет в инвентарь
            this.game.addItem(item);
            
            // Добавить опыт
            if (this.game.modules && this.game.modules.progression) {
                const expGained = this.calculateCraftingExp(blueprint, item.quality);
                const skillType = blueprint.type === 'weapon' ? 'weaponsmith' : 'armorsmith';
                this.game.modules.progression.addExp(expGained, skillType);
            }
        }
        
        // Удалить таймер
        this.activeCrafts.delete(craftId);
        
        if (this.game.ui) {
            if (this.game.ui.showNotification && item) {
                const qualityName = QUALITIES && QUALITIES[item.quality-1] ? QUALITIES[item.quality-1].name : 'Неизвестно';
                this.game.ui.showNotification(`Создан предмет: ${item.name} (${qualityName})`, 'success');
            }
            if (this.game.ui.updateActiveCrafts) {
                this.game.ui.updateActiveCrafts(this.game.forge.activeCrafts);
            }
        }
        
        return item;
    }
    
    // Сгенерировать предмет
    generateItem(blueprint, materialOverrides = {}, qualityBonus = 1.0) {
        if (!blueprint) {
            console.error('Не передан blueprint в generateItem');
            return null;
        }
        
        const itemId = 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        
        // Определить качество
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
        if (blueprint.baseStats) {
            for (const [statName, statConfig] of Object.entries(blueprint.baseStats)) {
                const baseValue = statConfig.base || 0;
                const variance = statConfig.variance || 0;
                const randomVariance = (Math.random() * 2 - 1) * variance;
                let value = baseValue + randomVariance;
                
                // Применить множитель качества
                if (CONFIG && CONFIG.QUALITY_MULTIPLIERS && CONFIG.QUALITY_MULTIPLIERS[quality - 1]) {
                    value *= CONFIG.QUALITY_MULTIPLIERS[quality - 1];
                }
                
                // Округлить
                stats[statName] = Math.round(value * 10) / 10;
            }
        }
        
        // Шанс зачарования
        const enchantments = [];
        
        // Проверяем магические материалы из materialOverrides
        const hasMagicMaterial = materialOverrides ? 
            Object.keys(materialOverrides).some(id => {
                return RESOURCES && RESOURCES[id] && RESOURCES[id].type === 'magic';
            }) : false;
        
        let enchantChance = CONFIG && CONFIG.BASE_ENCHANT_CHANCE ? CONFIG.BASE_ENCHANT_CHANCE : 0.01;
        if (hasMagicMaterial) enchantChance += 0.15;
        
        // Добавляем бонус от навыка зачарования
        if (this.game && this.game.player && this.game.player.skills && this.game.player.skills.enchanter) {
            enchantChance += this.game.player.skills.enchanter.level * 0.02;
        }
        
        if (Math.random() < enchantChance && ENCHANTMENTS) {
            const enchTypes = Object.keys(ENCHANTMENTS);
            if (enchTypes.length > 0) {
                const randomEnch = ENCHANTMENTS[enchTypes[Math.floor(Math.random() * enchTypes.length)]];
                
                const value = randomEnch.minValue + Math.random() * (randomEnch.maxValue - randomEnch.minValue);
                enchantments.push({
                    type: randomEnch.name,
                    school: randomEnch.name.toLowerCase(),
                    value: Math.round(value),
                    description: randomEnch.description
                });
            }
        }
        
        // Получаем название качества
        let qualityName = 'Неизвестно';
        if (QUALITIES && QUALITIES[quality-1]) {
            qualityName = QUALITIES[quality-1].name;
        }
        
        // Создать объект предмета
        const item = {
            id: itemId,
            name: `${qualityName} ${blueprint.name}`,
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
        if (!blueprint || !CONFIG) return 0;
        
        const baseExp = blueprint.timeToCraft / 10;
        const qualityMultiplier = CONFIG.QUALITY_MULTIPLIERS && CONFIG.QUALITY_MULTIPLIERS[quality - 1] 
            ? CONFIG.QUALITY_MULTIPLIERS[quality - 1] 
            : 1.0;
            
        const craftExpMultiplier = CONFIG.CRAFT_EXP_MULTIPLIER || 10;
        
        return Math.round(baseExp * qualityMultiplier * craftExpMultiplier);
    }
    
    // Расчет стоимости предмета
    calculateItemValue(stats, quality, enchantments) {
        if (!stats) return 0;
        
        let value = 0;
        
        // Базовая стоимость за статы
        if (stats.damageMin && stats.damageMax) {
            value += (stats.damageMin + stats.damageMax) * 5;
        }
        if (stats.armor) {
            value += stats.armor * 8;
        }
        
        // Множитель качества
        if (CONFIG && CONFIG.QUALITY_MULTIPLIERS && CONFIG.QUALITY_MULTIPLIERS[quality - 1]) {
            value *= CONFIG.QUALITY_MULTIPLIERS[quality - 1];
        }
        
        // Добавка за зачарования
        if (enchantments && Array.isArray(enchantments)) {
            enchantments.forEach(ench => {
                if (ench && ench.value) {
                    value += ench.value * 20;
                }
            });
        }
        
        return Math.max(1, Math.round(value)); // Минимум 1 золото
    }
    
    // Отменить крафт
    cancelCrafting(craftId) {
        if (!this.game.forge.activeCrafts) return false;
        
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
        if (blueprint) {
            for (const material of blueprint.materials) {
                const amountToReturn = Math.ceil(material.amount * 0.5);
                this.game.addResource(material.resourceId, amountToReturn);
            }
        }
        
        this.game.forge.activeCrafts.splice(craftIndex, 1);
        
        if (this.game.ui) {
            if (this.game.ui.updateActiveCrafts) {
                this.game.ui.updateActiveCrafts(this.game.forge.activeCrafts);
            }
            if (this.game.ui.showNotification) {
                this.game.ui.showNotification('Ковка отменена. Возвращено 50% ресурсов.', 'warning');
            }
        }
        
        return true;
    }
}

// Делаем класс доступным глобально
if (typeof window !== 'undefined') {
    window.CraftingModule = CraftingModule;
}