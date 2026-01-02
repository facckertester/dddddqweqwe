// src/js/core/game.js
class Game {
    constructor() {
        this.state = null;
        this.modules = {};
        this.ui = null;
        this.saveSystem = null;
        
        // Привязка контекста
        this.saveGame = this.saveGame.bind(this);
        this.loadGame = this.loadGame.bind(this);
        this.dailyUpdates = this.dailyUpdates.bind(this);
    }
    
    init(uiManager, saveSystem) {
        this.ui = uiManager;
        this.saveSystem = saveSystem;
        
        // Загружаем сохранение или создаем новую игру
        this.loadGame();
        
        // Инициализируем модули
        this.modules.crafting = new CraftingModule(this);
        this.modules.progression = new ProgressionModule(this);
        this.modules.inventory = new InventoryModule(this);
        this.modules.orders = new OrdersModule(this);
        this.modules.reforge = new ReforgeModule(this);
        this.modules.trading = new TradingModule(this); // ← ДОБАВИЛИ ТОРГОВЛЮ
        
        // Обновляем таймеры заказов при загрузке
        if (this.modules.orders && this.modules.orders.updateOrderTimers) {
            this.modules.orders.updateOrderTimers();
        }
        
        // Обновляем UI с начальным состоянием
        this.updateUI();
        
        // Автосохранение каждые 60 секунд
        setInterval(this.saveGame, 60000);
        
        // Ежедневные обновления каждые 10 секунд (для теста)
        // В реальной игре это должно быть 24 часа
        setInterval(this.dailyUpdates, 10000);
        
        // Генерация ежедневных заказов
        this.generateDailyOrders();
        
        // Ежедневное обновление торговли
        this.dailyTradingUpdate();
        
        console.log('Игра инициализирована');
    }
    
    // Метод для генерации ежедневных заказов
    generateDailyOrders() {
        // Проверяем, нужно ли генерировать новые заказы
        const lastOrderGeneration = this.state.gameState.lastOrderGeneration || 0;
        const oneDay = 24 * 60 * 60 * 1000; // 24 часа в миллисекундах
        
        if (Date.now() - lastOrderGeneration >= oneDay || this.state.gameState.orders.length === 0) {
            if (this.modules.orders && this.modules.orders.generateDailyOrders) {
                this.modules.orders.generateDailyOrders(3);
                this.state.gameState.lastOrderGeneration = Date.now();
            }
        }
    }
    
    // Ежедневное обновление торговли
    dailyTradingUpdate() {
        const lastTradeUpdate = this.state.gameState.lastTradeUpdate || 0;
        const oneDay = 24 * 60 * 60 * 1000;
        
        if (Date.now() - lastTradeUpdate >= oneDay) {
            if (this.modules.trading && this.modules.trading.dailyUpdate) {
                this.modules.trading.dailyUpdate();
                this.state.gameState.lastTradeUpdate = Date.now();
                
                // Увеличиваем игровой день
                this.state.gameState.currentDay = (this.state.gameState.currentDay || 1) + 1;
                
                // Обновляем UI
                this.updateUI();
            }
        }
    }
    
    // Все ежедневные обновления
    dailyUpdates() {
        this.generateDailyOrders();
        this.dailyTradingUpdate();
    }
    
    loadGame() {
        const saved = this.saveSystem.loadGame();
        if (saved && this.saveSystem.validateSave(saved)) {
            this.state = saved;
            console.log('Игра загружена из сохранения');
        } else {
            this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
            
            // Гарантируем, что все необходимые поля существуют
            if (!this.state.gameState) {
                this.state.gameState = {};
            }
            if (!this.state.gameState.orders) {
                this.state.gameState.orders = [];
            }
            if (!this.state.gameState.marketPrices) {
                this.state.gameState.marketPrices = {};
            }
            if (!this.state.gameState.currentDay) {
                this.state.gameState.currentDay = 1;
            }
            if (!this.state.gameState.lastOrderGeneration) {
                this.state.gameState.lastOrderGeneration = 0;
            }
            if (!this.state.gameState.lastTradeUpdate) {
                this.state.gameState.lastTradeUpdate = 0;
            }
            
            console.log('Создана новая игра');
        }
    }
    
    saveGame() {
        this.state.timestamp = Date.now();
        this.saveSystem.saveGame(this.state);
        if (this.ui && this.ui.showNotification) {
            this.ui.showNotification('Игра сохранена', 'success');
        }
    }
    
    updateUI() {
        // Проверяем, что элементы DOM существуют
        const goldElement = document.getElementById('gold-amount');
        const levelElement = document.getElementById('player-level');
        const dayElement = document.getElementById('game-day');
        
        if (goldElement && this.state && this.state.player) {
            goldElement.textContent = this.state.player.gold;
        }
        
        if (levelElement && this.state && this.state.player) {
            levelElement.textContent = this.state.player.level;
        }
        
        if (dayElement && this.state && this.state.gameState) {
            dayElement.textContent = this.state.gameState.currentDay || 1;
        }
        
        // Обновляем инвентарь в сайдбаре
        if (this.ui && this.ui.updateInventory && this.state && this.state.inventory) {
            this.ui.updateInventory(this.state.inventory);
        }
        
        // Обновляем доступные чертежи
        if (this.ui && this.ui.updateBlueprints && this.state && this.state.inventory) {
            this.ui.updateBlueprints(
                window.BLUEPRINTS || {}, 
                this.state.inventory.blueprints || []
            );
        }
    }
    
    // Геттеры для удобства с проверками
    get player() {
        return this.state ? this.state.player : null;
    }
    
    get inventory() {
        return this.state ? this.state.inventory : null;
    }
    
    get forge() {
        return this.state ? this.state.forge : null;
    }
    
    get gameState() {
        return this.state ? this.state.gameState : null;
    }
    
    // Изменение состояния с проверками
    addGold(amount) {
        if (!this.state || !this.state.player) return;
        this.state.player.gold = (this.state.player.gold || 0) + amount;
        this.updateUI();
    }
    
    removeGold(amount) {
        if (!this.state || !this.state.player) return false;
        
        const currentGold = this.state.player.gold || 0;
        if (currentGold >= amount) {
            this.state.player.gold = currentGold - amount;
            this.updateUI();
            return true;
        }
        return false;
    }
    
    addResource(resourceId, amount) {
        if (!this.state || !this.state.inventory || !this.state.inventory.resources) return;
        
        if (!this.state.inventory.resources[resourceId]) {
            this.state.inventory.resources[resourceId] = 0;
        }
        this.state.inventory.resources[resourceId] += amount;
        this.updateUI();
    }
    
    removeResource(resourceId, amount) {
        if (!this.state || !this.state.inventory || !this.state.inventory.resources) return false;
        
        const currentAmount = this.state.inventory.resources[resourceId] || 0;
        if (currentAmount >= amount) {
            this.state.inventory.resources[resourceId] -= amount;
            this.updateUI();
            return true;
        }
        return false;
    }
    
    addItem(item) {
        if (!this.state || !this.state.inventory || !this.state.inventory.items) return;
        
        if (!Array.isArray(this.state.inventory.items)) {
            this.state.inventory.items = [];
        }
        this.state.inventory.items.push(item);
        this.updateUI();
    }
    
    removeItem(itemId) {
        if (!this.state || !this.state.inventory || !Array.isArray(this.state.inventory.items)) return false;
        
        const index = this.state.inventory.items.findIndex(item => item && item.id === itemId);
        if (index !== -1) {
            this.state.inventory.items.splice(index, 1);
            this.updateUI();
            return true;
        }
        return false;
    }
    
    // Новый метод: обработка продаж с витрины
    processShowroomSales() {
        if (this.modules.trading && this.modules.trading.processShowroomSales) {
            return this.modules.trading.processShowroomSales();
        }
        return [];
    }
    
    // Новый метод: покупка ресурсов
    buyResources(merchantId, resourceId, amount) {
        if (this.modules.trading && this.modules.trading.buyResources) {
            return this.modules.trading.buyResources(merchantId, resourceId, amount);
        }
        return false;
    }
    
    // Новый метод: продажа предмета торговцу
    sellItemToMerchant(merchantId, itemId) {
        if (this.modules.trading && this.modules.trading.sellItemToMerchant) {
            return this.modules.trading.sellItemToMerchant(merchantId, itemId);
        }
        return false;
    }
    
    // Новый метод: обновление рыночных цен
    updateMarketPrices(force = false) {
        if (this.modules.trading && this.modules.trading.updateMarketPrices) {
            this.modules.trading.updateMarketPrices(force);
        }
    }
    
    // Новый метод: получение доступных торговцев
    getAvailableMerchants() {
        if (this.modules.trading && this.modules.trading.getAvailableMerchants) {
            return this.modules.trading.getAvailableMerchants();
        }
        return [];
    }
    
    // Новый метод: получение торговца по ID
    getMerchant(merchantId) {
        if (this.modules.trading && this.modules.trading.getMerchant) {
            return this.modules.trading.getMerchant(merchantId);
        }
        return null;
    }
}

// Инициализация игры
let gameInstance = null;

function initGame() {
    if (!gameInstance) {
        try {
            console.log('Начинаем инициализацию игры...');
            
            // Сначала создаем saveSystem
            const saveSystem = new SaveSystem();
            
            // Затем создаем экземпляр игры
            gameInstance = new Game();
            
            // Затем создаем UI Manager
            const uiManager = new UIManager(gameInstance);
            
            // Инициализируем игру
            gameInstance.init(uiManager, saveSystem);
            
            // Инициализируем UI
            if (uiManager && uiManager.init) {
                uiManager.init();
            }
            
            console.log('Игра успешно инициализирована!');
        } catch (error) {
            console.error('Ошибка при инициализации игры:', error);
            
            // Показываем ошибку пользователю
            const errorElement = document.getElementById('notification-area') || document.getElementById('game-content');
            if (errorElement) {
                errorElement.innerHTML = `
                    <div style="color: #DC143C; padding: 20px; text-align: center;">
                        <h3>Ошибка загрузки игры</h3>
                        <p>${error.message}</p>
                        <button onclick="location.reload()" style="padding: 10px 20px; margin-top: 20px;">
                            Обновить страницу
                        </button>
                    </div>
                `;
            }
            
            throw error; // Передаем ошибку дальше
        }
    }
    return gameInstance;
}

// Делаем функцию глобальной для доступа из main.js
window.initGame = initGame;
window.Game = Game;