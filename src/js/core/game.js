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
        
        // Обновляем таймеры заказов при загрузке
        if (this.modules.orders && this.modules.orders.updateOrderTimers) {
            this.modules.orders.updateOrderTimers();
        }
        
        // Обновляем UI с начальным состоянием
        this.updateUI();
        
        // Автосохранение каждые 60 секунд
        setInterval(this.saveGame, 60000);
        
        // Генерация ежедневных заказов
        this.generateDailyOrders();
        
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
    
    loadGame() {
        const saved = this.saveSystem.loadGame();
        if (saved && this.saveSystem.validateSave(saved)) {
            this.state = saved;
            console.log('Игра загружена из сохранения');
        } else {
            this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
            
            // Гарантируем, что orders существует
            if (!this.state.gameState.orders) {
                this.state.gameState.orders = [];
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