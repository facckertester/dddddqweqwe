// src/js/modules/orders.js
class OrdersModule {
    constructor(game) {
        this.game = game;
        this.activeOrders = new Map(); // Для отслеживания таймеров срочных заказов
    }
    
    // Генерация ежедневных заказов
    generateDailyOrders(amount = 3) {
        const orders = [];
        
        for (let i = 0; i < amount; i++) {
            const order = this.generateOrder();
            if (order) {
                orders.push(order);
            }
        }
        
        // Добавляем к текущим заказам
        this.game.gameState.orders.push(...orders);
        
        this.game.ui.showNotification(`Появилось ${orders.length} новых заказов!`, 'info');
        return orders;
    }
    
    // Генерация одного заказа
    generateOrder() {
        const orderTypes = Object.keys(ORDER_TYPES);
        const npcTypes = Object.keys(NPC_TYPES);
        
        // Выбираем случайные тип заказа и NPC
        const orderType = orderTypes[Math.floor(Math.random() * orderTypes.length)];
        const npcType = npcTypes[Math.floor(Math.random() * npcTypes.length)];
        
        // Генерируем требования
        const requirements = this.generateRequirements(orderType, npcType);
        if (!requirements) return null;
        
        // Создаем заказ
        const orderId = 'order_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        const order = {
            id: orderId,
            type: orderType,
            npcType: npcType,
            customerName: this.generateCustomerName(npcType),
            requirements: requirements,
            reward: this.calculateReward(orderType, requirements),
            status: 'active',
            createdAt: Date.now(),
            expiresAt: this.calculateExpiry(orderType)
        };
        
        // Для срочных заказов запускаем таймер
        if (orderType === 'urgent' && order.expiresAt) {
            this.startOrderTimer(orderId, order.expiresAt);
        }
        
        return order;
    }
    
    // Генерация требований для заказа
    generateRequirements(orderType, npcType) {
        const npc = NPC_TYPES[npcType];
        const blueprints = Object.values(BLUEPRINTS);
        
        // Выбираем случайный чертеж, подходящий NPC
        const suitableBlueprints = blueprints.filter(bp => {
            if (npc.preferences.itemTypes && !npc.preferences.itemTypes.includes(bp.type)) {
                return false;
            }
            return true;
        });
        
        if (suitableBlueprints.length === 0) return null;
        
        const blueprint = suitableBlueprints[Math.floor(Math.random() * suitableBlueprints.length)];
        
        // Генерируем требования на основе чертежа
        const requirements = {
            blueprintId: blueprint.id,
            minQuality: this.determineMinQuality(npc, orderType),
            requiredStats: this.generateRequiredStats(blueprint, npc),
            requiredEnchantments: this.generateRequiredEnchantments(npc, orderType),
            maxPrice: this.determineMaxPrice(orderType, npc)
        };
        
        return requirements;
    }
    
    // Определение минимального качества
    determineMinQuality(npc, orderType) {
        if (npc.preferences.preferredQuality) {
            return npc.preferences.preferredQuality[0]; // Минимальное из предпочтительных
        }
        
        // Базовые значения в зависимости от типа заказа
        const baseQuality = {
            simple: 2, // Обычное
            urgent: 3, // Хорошее
            auction: 2,
            chain: 3
        };
        
        return baseQuality[orderType] || 2;
    }
    
    // Генерация требуемых статов
    generateRequiredStats(blueprint, npc) {
        const requiredStats = {};
        
        // Если у NPC есть предпочтения по статам
        if (npc.preferences.preferredStats) {
            const preferredStat = npc.preferences.preferredStats[
                Math.floor(Math.random() * npc.preferences.preferredStats.length)
            ];
            
            if (blueprint.baseStats[preferredStat]) {
                // Требуем значение на 20% выше среднего
                const baseValue = blueprint.baseStats[preferredStat].base;
                const variance = blueprint.baseStats[preferredStat].variance || 0;
                requiredStats[preferredStat] = {
                    min: Math.round(baseValue * 1.2),
                    max: null
                };
            }
        }
        
        return requiredStats;
    }
    
    // Генерация требуемых зачарований
    generateRequiredEnchantments(npc, orderType) {
        const requiredEnchantments = [];
        
        // Маги предпочитают зачарованные предметы
        if (npc.type === 'mage' || (orderType === 'chain' && Math.random() > 0.5)) {
            const enchantmentTypes = Object.keys(ENCHANTMENTS);
            const randomEnchantment = enchantmentTypes[Math.floor(Math.random() * enchantmentTypes.length)];
            requiredEnchantments.push(randomEnchantment);
        }
        
        return requiredEnchantments;
    }
    
    // Определение максимальной цены
    determineMaxPrice(orderType, npc) {
        const basePrice = ORDER_TYPES[orderType].baseReward || 50;
        let multiplier = 1.0;
        
        if (npc.preferences.budgetMultiplier) {
            multiplier = npc.preferences.budgetMultiplier;
        }
        
        // Купцы платят больше
        if (npc.type === 'merchant') {
            multiplier *= 1.5;
        }
        
        return Math.round(basePrice * multiplier * (0.8 + Math.random() * 0.4)); // ±20% случайность
    }
    
    // Расчет награды
    calculateReward(orderType, requirements) {
        const baseReward = ORDER_TYPES[orderType].baseReward || 50;
        
        let reward = baseReward;
        
        // Бонусы за сложность
        if (requirements.minQuality > 2) {
            reward *= (1 + (requirements.minQuality - 2) * 0.3);
        }
        
        if (requirements.requiredEnchantments.length > 0) {
            reward *= 1.5;
        }
        
        if (Object.keys(requirements.requiredStats).length > 0) {
            reward *= 1.2;
        }
        
        // Случайность ±15%
        reward *= (0.85 + Math.random() * 0.3);
        
        return {
            gold: Math.round(reward),
            reputation: this.calculateReputation(orderType, requirements),
            items: this.calculateItemRewards(orderType)
        };
    }
    
    // Расчет репутации
    calculateReputation(orderType, requirements) {
        const reputation = {};
        
        // Разные фракции дают разную репутацию
        if (requirements.requiredEnchantments.length > 0) {
            reputation.magesGuild = Math.round(10 + Math.random() * 20);
        } else {
            reputation.adventurersGuild = Math.round(5 + Math.random() * 15);
        }
        
        // Срочные заказы дают больше репутации
        if (orderType === 'urgent') {
            for (const key in reputation) {
                reputation[key] = Math.round(reputation[key] * 1.5);
            }
        }
        
        return reputation;
    }
    
    // Расчет награды предметами
    calculateItemRewards(orderType) {
        const rewards = [];
        
        // Шанс получить ресурсы
        if (Math.random() < 0.3) {
            const resourceIds = Object.keys(RESOURCES);
            const randomResource = resourceIds[Math.floor(Math.random() * resourceIds.length)];
            const amount = 1 + Math.floor(Math.random() * 3);
            
            rewards.push({
                type: 'resource',
                id: randomResource,
                amount: amount
            });
        }
        
        // Шанс получить чертеж (только для цепочных заказов)
        if (orderType === 'chain' && Math.random() < 0.5) {
            const blueprintIds = Object.keys(BLUEPRINTS);
            const availableBlueprints = blueprintIds.filter(id => 
                !this.game.inventory.blueprints.includes(id)
            );
            
            if (availableBlueprints.length > 0) {
                const randomBlueprint = availableBlueprints[
                    Math.floor(Math.random() * availableBlueprints.length)
                ];
                
                rewards.push({
                    type: 'blueprint',
                    id: randomBlueprint
                });
            }
        }
        
        return rewards;
    }
    
    // Расчет срока действия заказа
    calculateExpiry(orderType) {
        if (orderType === 'urgent') {
            return Date.now() + (ORDER_TYPES[orderType].timeLimit * 1000);
        }
        return null;
    }
    
    // Генерация имени заказчика
    generateCustomerName(npcType) {
        const firstNames = ['Артур', 'Гарольд', 'Элрик', 'Морган', 'Ланселот', 'Гвейн'];
        const lastNames = ['Стальной', 'Молот', 'Щит', 'Клинок', 'Дракон', 'Ворон'];
        
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        
        return `${firstName} ${lastName}`;
    }
    
    // Запуск таймера для срочного заказа
    startOrderTimer(orderId, expiresAt) {
        const timeLeft = expiresAt - Date.now();
        
        if (timeLeft <= 0) {
            this.expireOrder(orderId);
            return;
        }
        
        const timer = setTimeout(() => {
            this.expireOrder(orderId);
        }, timeLeft);
        
        this.activeOrders.set(orderId, timer);
    }
    
    // Просрочка заказа
    expireOrder(orderId) {
        const orderIndex = this.game.gameState.orders.findIndex(o => o.id === orderId);
        if (orderIndex === -1) return;
        
        const order = this.game.gameState.orders[orderIndex];
        order.status = 'expired';
        
        // Удалить таймер
        const timer = this.activeOrders.get(orderId);
        if (timer) {
            clearTimeout(timer);
            this.activeOrders.delete(orderId);
        }
        
        this.game.ui.showNotification(`Заказ от ${order.customerName} просрочен!`, 'warning');
    }
    
    // Проверка соответствия предмета заказу
    checkItemFitsOrder(order, item) {
        const requirements = order.requirements;
        
        // Проверка чертежа
        const blueprint = BLUEPRINTS[requirements.blueprintId];
        if (!blueprint) return false;
        
        if (item.type !== blueprint.type || item.subtype !== blueprint.subtype) {
            return false;
        }
        
        // Проверка качества
        if (item.quality < requirements.minQuality) {
            return false;
        }
        
        // Проверка статов
        for (const [statName, statReq] of Object.entries(requirements.requiredStats)) {
            const itemStat = item.stats[statName];
            if (!itemStat) return false;
            
            if (statReq.min !== null && itemStat < statReq.min) {
                return false;
            }
            
            if (statReq.max !== null && itemStat > statReq.max) {
                return false;
            }
        }
        
        // Проверка зачарований
        if (requirements.requiredEnchantments.length > 0) {
            const hasRequiredEnchantment = requirements.requiredEnchantments.some(enchType => {
                return item.enchantments.some(ench => 
                    ench.school.toLowerCase() === enchType.toLowerCase()
                );
            });
            
            if (!hasRequiredEnchantment) {
                return false;
            }
        }
        
        // Проверка цены (если есть ограничение)
        if (requirements.maxPrice && item.value > requirements.maxPrice) {
            return false;
        }
        
        return true;
    }
    
    // Завершение заказа
    completeOrder(orderId, itemId) {
        const orderIndex = this.game.gameState.orders.findIndex(o => o.id === orderId);
        if (orderIndex === -1) return false;
        
        const order = this.game.gameState.orders[orderIndex];
        const item = this.game.modules.inventory.getItemById(itemId);
        
        if (!item || order.status !== 'active') {
            return false;
        }
        
        // Проверка соответствия
        if (!this.checkItemFitsOrder(order, item)) {
            this.game.ui.showNotification('Предмет не соответствует требованиям заказа!', 'error');
            return false;
        }
        
        // Выдача награды
        const reward = order.reward;
        
        // Золото
        this.game.addGold(reward.gold);
        
        // Репутация
        for (const [faction, amount] of Object.entries(reward.reputation)) {
            if (this.game.player.reputation[faction] !== undefined) {
                this.game.player.reputation[faction] += amount;
            }
        }
        
        // Предметы
        reward.items.forEach(rewardItem => {
            if (rewardItem.type === 'resource') {
                this.game.addResource(rewardItem.id, rewardItem.amount);
            } else if (rewardItem.type === 'blueprint') {
                if (!this.game.inventory.blueprints.includes(rewardItem.id)) {
                    this.game.inventory.blueprints.push(rewardItem.id);
                }
            }
        });
        
        // Удалить предмет из инвентаря
        this.game.removeItem(itemId);
        
        // Обновить статус заказа
        order.status = 'completed';
        order.completedAt = Date.now();
        order.completedWithItem = itemId;
        
        // Удалить таймер, если был
        const timer = this.activeOrders.get(orderId);
        if (timer) {
            clearTimeout(timer);
            this.activeOrders.delete(orderId);
        }
        
        // Опыт за выполнение заказа
        const expGained = Math.round(reward.gold / 2);
        this.game.modules.progression.addExp(expGained);
        
        // Уведомление
        this.game.ui.showNotification(
            `Заказ выполнен! Получено: ${reward.gold} золота, репутация +${Object.values(reward.reputation).reduce((a, b) => a + b, 0)}`,
            'success'
        );
        
        // Проверка на цепочку заказов
        if (order.type === 'chain') {
            this.handleChainOrderCompletion(order);
        }
        
        return true;
    }
    
    // Обработка завершения цепочки заказов
    handleChainOrderCompletion(order) {
        // TODO: Реализовать логику цепочек заказов
        console.log('Цепочка заказов завершена:', order);
    }
    
    // Торг за заказ
    bargain(orderId, playerOffer) {
        const order = this.game.gameState.orders.find(o => o.id === orderId);
        if (!order || order.type !== 'auction') return false;
        
        const npc = NPC_TYPES[order.npcType];
        const basePrice = order.requirements.maxPrice || 100;
        
        // Шанс успеха зависит от навыка торговли
        const merchantSkill = this.game.player.skills.merchant.level;
        const successChance = 0.5 + (merchantSkill * 0.05); // +5% за уровень
        const isSuccessful = Math.random() < successChance;
        
        if (isSuccessful) {
            // Успешный торг - увеличиваем награду
            const increaseMultiplier = 1.1 + (merchantSkill * 0.02); // +2% за уровень
            order.reward.gold = Math.round(order.reward.gold * increaseMultiplier);
            
            this.game.ui.showNotification(
                `Торг успешен! Награда увеличена до ${order.reward.gold} золота.`,
                'success'
            );
            
            // Опыт за успешный торг
            this.game.modules.progression.addExp(10, 'merchant');
            
            return true;
        } else {
            // Неудачный торг - заказчик может отказаться
            const refusalChance = 0.3 - (merchantSkill * 0.03); // -3% за уровень
            if (Math.random() < refusalChance) {
                order.status = 'refused';
                this.game.ui.showNotification('Заказчик отказался от сделки!', 'error');
                return false;
            }
            
            this.game.ui.showNotification('Торг не удался. Заказчик стоит на своем.', 'warning');
            return false;
        }
    }
    
    // Получить активные заказы
    getActiveOrders() {
        return this.game.gameState.orders.filter(order => order.status === 'active');
    }
    
    // Получить просроченные заказы
    getExpiredOrders() {
        return this.game.gameState.orders.filter(order => order.status === 'expired');
    }
    
    // Получить завершенные заказы
    getCompletedOrders() {
        return this.game.gameState.orders.filter(order => order.status === 'completed');
    }
    
    // Очистить просроченные заказы
    clearExpiredOrders() {
        const expiredCount = this.getExpiredOrders().length;
        this.game.gameState.orders = this.game.gameState.orders.filter(order => 
            order.status !== 'expired'
        );
        
        if (expiredCount > 0) {
            this.game.ui.showNotification(`Удалено ${expiredCount} просроченных заказов.`, 'info');
        }
    }
    
    // Обновить таймеры заказов (вызывается при загрузке игры)
    updateOrderTimers() {
        const now = Date.now();
        
        this.game.gameState.orders.forEach(order => {
            if (order.type === 'urgent' && order.status === 'active' && order.expiresAt) {
                if (order.expiresAt <= now) {
                    this.expireOrder(order.id);
                } else {
                    this.startOrderTimer(order.id, order.expiresAt);
                }
            }
        });
    }
}