// src/js/modules/reforge.js
class ReforgeModule {
    constructor(game) {
        this.game = game;
    }
    
    // Проверить, можно ли перековать предмет
    canReforge(itemId) {
        const item = this.game.modules.inventory.getItemById(itemId);
        if (!item) return false;
        
        // Предметы на витрине нельзя перековывать
        if (this.game.forge.showroom.includes(itemId)) {
            return false;
        }
        
        // Предметы в крафте нельзя перековывать
        const isInCraft = this.game.forge.activeCrafts.some(craft => 
            craft.id.includes(itemId)
        );
        
        return !isInCraft;
    }
    
    // Расчет стоимости перековки
    calculateReforgeCost(item, options = {}) {
        let cost = 0;
        
        // Базовая стоимость - 10% от цены предмета
        cost += item.value * 0.1;
        
        // Доплаты за опции
        if (options.preserveQuality) {
            cost *= 2; // Вдвое дороже за сохранение качества
        }
        
        if (options.targetStat) {
            cost *= 1.5; // +50% за фокусировку на стате
        }
        
        if (options.useMagicEssence) {
            // Добавляем стоимость магической эссенции
            const essenceCost = RESOURCES.fire_essence.basePrice * 2;
            cost += essenceCost;
        }
        
        // Скидка за уровень кузницы
        const forgeDiscount = this.game.forge.level * 0.05; // 5% за уровень
        cost *= (1 - forgeDiscount);
        
        return Math.max(10, Math.round(cost)); // Минимум 10 золота
    }
    
    // Перековка предмета
    reforgeItem(itemId, options = {}) {
        const item = this.game.modules.inventory.getItemById(itemId);
        if (!item || !this.canReforge(itemId)) {
            this.game.ui.showNotification('Невозможно перековать этот предмет', 'error');
            return false;
        }
        
        // Проверка стоимости
        const cost = this.calculateReforgeCost(item, options);
        if (!this.game.removeGold(cost)) {
            this.game.ui.showNotification(`Недостаточно золота! Нужно ${cost} золота.`, 'error');
            return false;
        }
        
        // Создаем копию предмета для изменений
        const reforgedItem = JSON.parse(JSON.stringify(item));
        
        // Применяем эффекты перековки
        this.applyReforgeEffects(reforgedItem, options);
        
        // Проверяем риск поломки
        const breakRisk = this.calculateBreakRisk(item, options);
        if (Math.random() < breakRisk) {
            this.game.ui.showNotification('Предмет разрушился при перековке!', 'error');
            this.game.removeItem(itemId);
            return false;
        }
        
        // Заменяем старый предмет новым
        const itemIndex = this.game.inventory.items.findIndex(i => i.id === itemId);
        if (itemIndex !== -1) {
            this.game.inventory.items[itemIndex] = reforgedItem;
        }
        
        // Опыт за перековку
        this.game.modules.progression.addExp(cost / 5, 'enchanter');
        
        this.game.ui.showNotification(`Предмет успешно перекован! Потрачено: ${cost} золота`, 'success');
        this.game.updateUI();
        
        return reforgedItem;
    }
    
    // Применение эффектов перековки
    applyReforgeEffects(item, options) {
        const blueprint = this.findBlueprintForItem(item);
        
        // Изменение качества (если не сохранено)
        if (!options.preserveQuality) {
            this.reforgeQuality(item);
        }
        
        // Изменение статов
        this.reforgeStats(item, blueprint, options);
        
        // Изменение зачарований
        this.reforgeEnchantments(item, options);
        
        // Обновляем стоимость
        item.value = this.game.modules.crafting.calculateItemValue(
            item.stats, 
            item.quality, 
            item.enchantments
        );
        
        // Обновляем имя с учетом нового качества
        item.name = `${QUALITIES[item.quality-1].name} ${item.baseName}`;
    }
    
    // Изменение качества при перековке
    reforgeQuality(item) {
        const currentQuality = item.quality;
        let newQuality = currentQuality;
        
        // Шанс изменения качества
        const changeChance = 0.7; // 70% шанс изменения
        
        if (Math.random() < changeChance) {
            // Определяем направление изменения (-1, 0, +1)
            const direction = Math.random() < 0.5 ? -1 : 1;
            newQuality = Math.max(1, Math.min(5, currentQuality + direction));
            
            // Шанс большего изменения (10%)
            if (Math.random() < 0.1) {
                newQuality = Math.max(1, Math.min(5, currentQuality + (direction * 2)));
            }
        }
        
        item.quality = newQuality;
    }
    
    // Изменение статов при перековке
    reforgeStats(item, blueprint, options) {
        if (!blueprint) return;
        
        // Если указан целевой стат, улучшаем его
        if (options.targetStat && blueprint.baseStats[options.targetStat]) {
            this.improveTargetStat(item, options.targetStat, blueprint);
        } else {
            // Иначе случайно изменяем все статы
            this.randomizeStats(item, blueprint);
        }
    }
    
    // Улучшение целевого стата
    improveTargetStat(item, targetStat, blueprint) {
        const currentValue = item.stats[targetStat] || 0;
        const baseConfig = blueprint.baseStats[targetStat];
        
        if (!baseConfig) return;
        
        // Улучшаем на 10-30%
        const improvement = 1.1 + (Math.random() * 0.2); // 10-30%
        let newValue = currentValue * improvement;
        
        // Добавляем случайность
        const variance = baseConfig.variance || 0;
        newValue += (Math.random() * 2 - 1) * variance * 0.5;
        
        // Применяем множитель качества
        newValue *= CONFIG.QUALITY_MULTIPLIERS[item.quality - 1];
        
        item.stats[targetStat] = Math.round(newValue * 10) / 10;
        
        // Немного ухудшаем другие статы (компенсация)
        Object.keys(item.stats).forEach(stat => {
            if (stat !== targetStat && Math.random() < 0.3) {
                item.stats[stat] *= 0.9 + (Math.random() * 0.1); // 90-100%
                item.stats[stat] = Math.round(item.stats[stat] * 10) / 10;
            }
        });
    }
    
    // Случайное изменение статов
    randomizeStats(item, blueprint) {
        Object.keys(item.stats).forEach(statName => {
            const baseConfig = blueprint.baseStats[statName];
            if (!baseConfig) return;
            
            // Полностью перегенерируем значение
            const baseValue = baseConfig.base;
            const variance = baseConfig.variance || 0;
            const randomVariance = (Math.random() * 2 - 1) * variance;
            let newValue = baseValue + randomVariance;
            
            // Применяем множитель качества
            newValue *= CONFIG.QUALITY_MULTIPLIERS[item.quality - 1];
            
            item.stats[statName] = Math.round(newValue * 10) / 10;
        });
    }
    
    // Изменение зачарований
    reforgeEnchantments(item, options) {
        // Если используем магическую эссенцию, гарантируем зачарование
        if (options.useMagicEssence) {
            this.guaranteeEnchantment(item);
            return;
        }
        
        // Шанс изменения зачарований
        const changeChance = 0.4; // 40%
        
        if (item.enchantments.length === 0) {
            // Если нет зачарований, шанс добавить
            if (Math.random() < 0.2) { // 20%
                this.addRandomEnchantment(item);
            }
        } else if (Math.random() < changeChance) {
            // Изменяем существующие зачарования
            this.modifyEnchantments(item);
        }
    }
    
    // Гарантированное добавление зачарования
    guaranteeEnchantment(item) {
        if (item.enchantments.length === 0) {
            // Добавляем новое зачарование
            this.addRandomEnchantment(item, true);
        } else {
            // Улучшаем существующее
            item.enchantments.forEach(ench => {
                const improvement = 1.2 + (Math.random() * 0.3); // 20-50%
                ench.value = Math.round(ench.value * improvement);
            });
        }
    }
    
    // Добавление случайного зачарования
    addRandomEnchantment(item, guaranteed = false) {
        const enchantmentTypes = Object.keys(ENCHANTMENTS);
        if (enchantmentTypes.length === 0) return;
        
        const randomType = enchantmentTypes[Math.floor(Math.random() * enchantmentTypes.length)];
        const enchantment = ENCHANTMENTS[randomType];
        
        const value = enchantment.minValue + 
                     Math.random() * (enchantment.maxValue - enchantment.minValue);
        
        item.enchantments.push({
            type: enchantment.name,
            school: randomType,
            value: Math.round(value),
            description: enchantment.description
        });
        
        // Если не гарантировано, есть шанс удалить другие зачарования
        if (!guaranteed && item.enchantments.length > 1 && Math.random() < 0.3) {
            item.enchantments.shift(); // Удаляем первое зачарование
        }
    }
    
    // Модификация существующих зачарований
    modifyEnchantments(item) {
        item.enchantments.forEach(ench => {
            // Шанс улучшения/ухудшения/изменения
            const roll = Math.random();
            
            if (roll < 0.4) { // 40% - улучшение
                const improvement = 1.1 + (Math.random() * 0.2); // 10-30%
                ench.value = Math.round(ench.value * improvement);
            } else if (roll < 0.7) { // 30% - ухудшение
                const reduction = 0.7 + (Math.random() * 0.2); // 70-90%
                ench.value = Math.round(ench.value * reduction);
                if (ench.value < 1) ench.value = 1;
            } else { // 30% - изменение типа
                this.changeEnchantmentType(ench);
            }
        });
    }
    
    // Изменение типа зачарования
    changeEnchantmentType(enchantment) {
        const oldType = enchantment.school;
        const availableTypes = Object.keys(ENCHANTMENTS).filter(type => type !== oldType);
        
        if (availableTypes.length > 0) {
            const newType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
            const newEnchantment = ENCHANTMENTS[newType];
            
            enchantment.type = newEnchantment.name;
            enchantment.school = newType;
            enchantment.description = newEnchantment.description;
            
            // Пересчитываем значение для нового типа
            const newValue = newEnchantment.minValue + 
                           Math.random() * (newEnchantment.maxValue - newEnchantment.minValue);
            enchantment.value = Math.round(newValue);
        }
    }
    
    // Расчет риска поломки
    calculateBreakRisk(item, options) {
        let risk = 0.05; // Базовый риск 5%
        
        // Увеличиваем риск за опции
        if (options.preserveQuality) {
            risk += 0.02; // +2%
        }
        
        if (options.targetStat) {
            risk += 0.03; // +3%
        }
        
        // Уменьшаем риск за уровень кузницы
        const forgeBonus = this.game.forge.level * 0.01; // -1% за уровень
        risk = Math.max(0.01, risk - forgeBonus);
        
        return risk;
    }
    
    // Поиск чертежа для предмета
    findBlueprintForItem(item) {
        return Object.values(BLUEPRINTS).find(bp => 
            bp.type === item.type && 
            bp.subtype === item.subtype
        );
    }
    
    // Получение предметов, доступных для перековки
    getReforgeableItems() {
        return this.game.inventory.items.filter(item => 
            this.canReforge(item.id)
        );
    }
}