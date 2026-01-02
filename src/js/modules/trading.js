// src/js/modules/trading.js
class TradingModule {
    constructor(game) {
        this.game = game;
        this.merchants = {};
        this.marketFluctuation = 0.1; // ±10% колебание цен
        this.lastPriceUpdate = 0;
        this.priceUpdateInterval = 5 * 60 * 1000; // Обновление цен каждые 5 минут
        
        this.initMerchants();
        this.updateMarketPrices(true); // Первоначальная инициализация
    }
    
    // Инициализация торговцев
    initMerchants() {
        this.merchants = {
            blacksmith_supplier: {
                id: "blacksmith_supplier",
                name: "Поставщик кузнеца",
                description: "Поставляет базовые материалы для ковки",
                type: "resource",
                inventory: ['iron_ore', 'coal', 'wood', 'leather'],
                markup: 1.2, // Наценка 20%
                reputation: 0,
                unlocked: true
            },
            exotic_goods: {
                id: "exotic_goods",
                name: "Торговец экзотическими товарами",
                description: "Редкие и магические материалы",
                type: "resource",
                inventory: ['steel', 'fire_essence'],
                markup: 1.5, // Наценка 50%
                reputation: 50,
                unlocked: false
            },
            general_store: {
                id: "general_store",
                name: "Универсальный магазин",
                description: "Покупает различные товары",
                type: "buyer",
                preferredItems: ['weapon', 'armor'],
                budget: 500,
                markup: 0.8, // Покупает по 80% цены
                reputation: 0,
                unlocked: true
            },
            collector: {
                id: "collector",
                name: "Коллекционер",
                description: "Покупает редкие и уникальные предметы",
                type: "buyer",
                preferredItems: ['weapon'],
                requiredQuality: 4, // Только превосходные и шедевры
                budget: 2000,
                markup: 1.3, // Покупает по 130% цены (выше рыночной)
                reputation: 100,
                unlocked: false
            }
        };
    }
    
    // Обновление рыночных цен
    updateMarketPrices(force = false) {
        const now = Date.now();
        
        // Обновляем цены только если прошло достаточно времени
        if (!force && now - this.lastPriceUpdate < this.priceUpdateInterval) {
            return;
        }
        
        this.lastPriceUpdate = now;
        
        if (!this.game.state.gameState.marketPrices) {
            this.game.state.gameState.marketPrices = {};
        }
        
        const prices = this.game.state.gameState.marketPrices;
        
        // Обновляем цены на все ресурсы
        for (const [resourceId, resource] of Object.entries(RESOURCES)) {
            if (!prices[resourceId]) {
                prices[resourceId] = resource.basePrice || 10;
            }
            
            // Применяем случайные колебания
            const fluctuation = (Math.random() * 2 - 1) * this.marketFluctuation;
            const basePrice = resource.basePrice || 10;
            let newPrice = basePrice * (1 + fluctuation);
            
            // Влияние спроса/предложения
            const playerStock = this.game.inventory.resources[resourceId] || 0;
            if (playerStock > 50) { // У игрока много - цена падает
                newPrice *= 0.9;
            } else if (playerStock < 5) { // У игрока мало - цена растет
                newPrice *= 1.1;
            }
            
            // Округляем и устанавливаем минимальную цену
            prices[resourceId] = Math.max(1, Math.round(newPrice));
        }
        
        // Обновляем UI если игра запущена
        if (this.game.ui && this.game.ui.updateMarketPrices) {
            this.game.ui.updateMarketPrices(prices);
        }
        
        console.log('Рыночные цены обновлены:', prices);
    }
    
    // Покупка ресурсов у торговца
    buyResources(merchantId, resourceId, amount) {
        const merchant = this.merchants[merchantId];
        if (!merchant || merchant.type !== 'resource') {
            this.showNotification('Этот торговец не продает ресурсы', 'error');
            return false;
        }
        
        if (!merchant.unlocked) {
            this.showNotification('Этот торговец еще не доступен', 'error');
            return false;
        }
        
        // Проверяем, есть ли товар у торговца
        if (!merchant.inventory.includes(resourceId)) {
            this.showNotification('У этого торговца нет такого товара', 'error');
            return false;
        }
        
        // Рассчитываем цену с учетом наценки торговца
        const basePrice = this.getResourcePrice(resourceId);
        const totalPrice = Math.round(basePrice * merchant.markup * amount);
        
        // Проверяем, достаточно ли золота
        if (!this.game.removeGold(totalPrice)) {
            this.showNotification(`Недостаточно золота! Нужно ${totalPrice}`, 'error');
            return false;
        }
        
        // Добавляем ресурсы
        this.game.addResource(resourceId, amount);
        
        // Увеличиваем репутацию с торговцем
        merchant.reputation += amount;
        
        // Проверяем разблокировку экзотических товаров
        if (!this.merchants.exotic_goods.unlocked && merchant.reputation >= 100) {
            this.merchants.exotic_goods.unlocked = true;
            this.showNotification('Разблокирован торговец экзотическими товарами!', 'success');
        }
        
        this.showNotification(`Куплено ${amount} ${RESOURCES[resourceId].name} за ${totalPrice} золота`, 'success');
        
        // Обновляем цены (покупка увеличивает спрос)
        this.adjustPriceAfterTransaction(resourceId, 'buy', amount);
        
        return true;
    }
    
    // Продажа предметов торговцу
    sellItemToMerchant(merchantId, itemId) {
        const merchant = this.merchants[merchantId];
        if (!merchant || merchant.type !== 'buyer') {
            this.showNotification('Этот торговец не покупает предметы', 'error');
            return false;
        }
        
        if (!merchant.unlocked) {
            this.showNotification('Этот торговец еще не доступен', 'error');
            return false;
        }
        
        const item = this.game.modules.inventory.getItemById(itemId);
        if (!item) {
            this.showNotification('Предмет не найден', 'error');
            return false;
        }
        
        // Проверяем, подходит ли предмет торговцу
        if (!this.isItemSuitableForMerchant(merchant, item)) {
            this.showNotification('Этому торговцу не интересен этот предмет', 'error');
            return false;
        }
        
        // Проверяем бюджет торговца
        const itemValue = this.calculateMerchantPrice(merchant, item);
        if (merchant.budget < itemValue) {
            this.showNotification('У торговца недостаточно золота', 'error');
            return false;
        }
        
        // Продаем предмет
        if (this.game.removeItem(itemId)) {
            // Добавляем золото
            this.game.addGold(itemValue);
            
            // Уменьшаем бюджет торговца
            merchant.budget -= itemValue;
            
            // Восстанавливаем бюджет со временем
            setTimeout(() => {
                merchant.budget += Math.round(itemValue * 0.1); // Восстанавливаем 10%
            }, 60000); // Через 1 минуту
            
            // Увеличиваем репутацию
            merchant.reputation += item.quality || 1;
            
            // Проверяем разблокировку коллекционера
            if (!this.merchants.collector.unlocked && merchant.reputation >= 200) {
                this.merchants.collector.unlocked = true;
                this.showNotification('Разблокирован коллекционер! Он платит больше за редкие предметы', 'success');
            }
            
            this.showNotification(`Предмет продан за ${itemValue} золота`, 'success');
            return itemValue;
        }
        
        return false;
    }
    
    // Проверка, подходит ли предмет торговцу
    isItemSuitableForMerchant(merchant, item) {
        // Проверка типа предмета
        if (merchant.preferredItems && !merchant.preferredItems.includes(item.type)) {
            return false;
        }
        
        // Проверка качества
        if (merchant.requiredQuality && item.quality < merchant.requiredQuality) {
            return false;
        }
        
        // Коллекционеру интересны только зачарованные предметы
        if (merchant.id === 'collector' && (!item.enchantments || item.enchantments.length === 0)) {
            return false;
        }
        
        return true;
    }
    
    // Расчет цены, которую предложит торговец
    calculateMerchantPrice(merchant, item) {
        let price = item.value || 0;
        
        // Применяем наценку торговца
        price *= merchant.markup;
        
        // Бонус за навык торговли
        const merchantSkill = this.game.player.skills.merchant.level;
        price *= (1 + merchantSkill * 0.05); // +5% за уровень
        
        // Случайность ±5%
        price *= (0.95 + Math.random() * 0.1);
        
        return Math.round(price);
    }
    
    // Получение текущей цены ресурса
    getResourcePrice(resourceId) {
        const prices = this.game.state.gameState.marketPrices || {};
        
        if (prices[resourceId]) {
            return prices[resourceId];
        }
        
        // Если цены нет в marketPrices, используем базовую
        return RESOURCES[resourceId]?.basePrice || 10;
    }
    
    // Корректировка цены после сделки
    adjustPriceAfterTransaction(resourceId, type, amount) {
        if (!this.game.state.gameState.marketPrices) {
            this.game.state.gameState.marketPrices = {};
        }
        
        const currentPrice = this.getResourcePrice(resourceId);
        let newPrice = currentPrice;
        
        if (type === 'buy') {
            // Покупка увеличивает спрос - цена растет
            newPrice *= (1 + (amount * 0.01)); // +1% за единицу
        } else if (type === 'sell') {
            // Продажа увеличивает предложение - цена падает
            newPrice *= (1 - (amount * 0.005)); // -0.5% за единицу
        }
        
        // Минимальная цена - 1 золото
        newPrice = Math.max(1, Math.round(newPrice));
        
        this.game.state.gameState.marketPrices[resourceId] = newPrice;
        
        // Запускаем обновление UI
        if (this.game.ui && this.game.ui.updateMarketPrices) {
            this.game.ui.updateMarketPrices(this.game.state.gameState.marketPrices);
        }
    }
    
    // Пассивные продажи с витрины
    processShowroomSales() {
        if (!this.game.forge.showroom || this.game.forge.showroom.length === 0) {
            return [];
        }
        
        const soldItems = [];
        const now = Date.now();
        
        // Проверяем каждый предмет на витрине
        for (let i = this.game.forge.showroom.length - 1; i >= 0; i--) {
            const itemId = this.game.forge.showroom[i];
            const item = this.game.modules.inventory.getItemById(itemId);
            
            if (!item) {
                // Удаляем несуществующий предмет
                this.game.forge.showroom.splice(i, 1);
                continue;
            }
            
            // Шанс продажи зависит от качества и цены
            let saleChance = 0.1; // Базовый шанс 10%
            
            // Качество увеличивает шанс
            saleChance += (item.quality - 1) * 0.05; // +5% за уровень качества
            
            // Дорогие предметы продаются реже
            const priceModifier = Math.min(1, 1000 / (item.value || 1000));
            saleChance *= priceModifier;
            
            // Бонус от навыка торговли
            const merchantSkill = this.game.player.skills.merchant.level;
            saleChance *= (1 + merchantSkill * 0.03); // +3% за уровень
            
            // Проверяем продажу
            if (Math.random() < saleChance) {
                // Рассчитываем цену продажи
                let salePrice = item.value || 0;
                
                // Витрина продает по 70-90% стоимости
                salePrice *= (0.7 + Math.random() * 0.2);
                
                // Бонус от навыка торговли
                salePrice *= (1 + merchantSkill * 0.02); // +2% за уровень
                
                salePrice = Math.round(salePrice);
                
                // Продаем предмет
                this.game.addGold(salePrice);
                this.game.removeItem(itemId);
                this.game.forge.showroom.splice(i, 1);
                
                soldItems.push({
                    item: item,
                    price: salePrice,
                    time: now
                });
                
                this.showNotification(`Предмет "${item.name}" продан с витрины за ${salePrice} золота!`, 'success');
            }
        }
        
        return soldItems;
    }
    
    // Автоматическая покупка ресурсов для витрины
    processResourceRestock() {
        // TODO: Реализовать автоматическую закупку ресурсов
        // когда на витрине много продаж
    }
    
    // Получение доступных торговцев
    getAvailableMerchants() {
        return Object.values(this.merchants).filter(merchant => merchant.unlocked);
    }
    
    // Получение торговца по ID
    getMerchant(merchantId) {
        return this.merchants[merchantId];
    }
    
    // Показ уведомления
    showNotification(message, type = 'info') {
        if (this.game.ui && this.game.ui.showNotification) {
            this.game.ui.showNotification(message, type);
        } else {
            console.log(`${type}: ${message}`);
        }
    }
    
    // Ежедневное обновление торговцев
    dailyUpdate() {
        // Восстанавливаем бюджеты торговцев
        for (const merchant of Object.values(this.merchants)) {
            if (merchant.type === 'buyer') {
                merchant.budget = Math.min(merchant.budget * 1.5, 10000); // Восстанавливаем до 150%
            }
        }
        
        // Обновляем рыночные цены
        this.updateMarketPrices(true);
        
        // Обрабатываем продажи с витрины
        this.processShowroomSales();
        
        this.showNotification('Торговый день начался! Цены и бюджеты обновлены.', 'info');
    }
}

// Делаем класс доступным глобально
if (typeof window !== 'undefined') {
    window.TradingModule = TradingModule;
}