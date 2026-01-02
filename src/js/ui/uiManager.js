// src/js/ui/uiManager.js
class UIManager {
    constructor(game) {
        this.game = game;
        this.currentModal = null;
    }
    
    init() {
        this.setupEventListeners();
        this.updateInventory(this.game.state.inventory);
        this.updateBlueprints(BLUEPRINTS, this.game.state.inventory.blueprints);
        this.updateActiveCrafts(this.game.forge.activeCrafts);
    }
    
    setupEventListeners() {
        // Навигация
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchScreen(e.currentTarget.dataset.screen);
            });
        });
        
        // Закрытие модальных окон
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => {
                this.hideModal();
            });
        });
        
        document.getElementById('modal-overlay').addEventListener('click', () => {
            this.hideModal();
        });
        
        // Глобальные горячие клавиши
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentModal) {
                this.hideModal();
            }
            if (e.key === 's' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                this.game.saveGame();
            }
        });
    }
    
    loadOrdersScreen() {
        const content = document.getElementById('orders-content');
        
        content.innerHTML = `
            <div class="orders-layout">
                <div class="orders-header">
                    <div class="orders-stats">
                        <div class="stat-badge">
                            <i class="fas fa-scroll"></i>
                            <span>Активные: <span id="active-orders-count">0</span></span>
                        </div>
                        <div class="stat-badge">
                            <i class="fas fa-check-circle"></i>
                            <span>Выполнено: <span id="completed-orders-count">0</span></span>
                        </div>
                        <button id="generate-orders-btn" class="btn-secondary">
                            <i class="fas fa-plus"></i> Новые заказы
                        </button>
                        <button id="clear-expired-btn" class="btn-secondary">
                            <i class="fas fa-trash"></i> Очистить просроченные
                        </button>
                    </div>
                </div>
                
                <div class="orders-container" id="orders-container">
                    <!-- Заказы будут здесь -->
                </div>
            </div>
        `;
        
        // Обновляем список заказов
        this.updateOrdersList();
        
        // Добавляем обработчики
        document.getElementById('generate-orders-btn').addEventListener('click', () => {
            this.game.modules.orders.generateDailyOrders(2);
            this.updateOrdersList();
        });
        
        document.getElementById('clear-expired-btn').addEventListener('click', () => {
            this.game.modules.orders.clearExpiredOrders();
            this.updateOrdersList();
        });
    }
    
    updateOrdersList() {
        const container = document.getElementById('orders-container');
        const activeCount = document.getElementById('active-orders-count');
        const completedCount = document.getElementById('completed-orders-count');
        
        if (!container) return;
        
        const activeOrders = this.game.modules.orders.getActiveOrders();
        const completedOrders = this.game.modules.orders.getCompletedOrders();
        
        // Обновляем счетчики
        if (activeCount) activeCount.textContent = activeOrders.length;
        if (completedCount) completedCount.textContent = completedOrders.length;
        
        if (activeOrders.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-scroll"></i>
                    <p>Нет активных заказов</p>
                    <p class="small">Новые заказы появляются каждый день</p>
                    <button id="force-generate-orders" class="btn-primary" style="margin-top: 15px;">
                        <i class="fas fa-plus"></i> Создать тестовые заказы
                    </button>
                </div>
            `;
            
            document.getElementById('force-generate-orders')?.addEventListener('click', () => {
                this.game.modules.orders.generateDailyOrders(3);
                this.updateOrdersList();
            });
            
            return;
        }
        
        // Отображаем активные заказы
        container.innerHTML = activeOrders.map(order => {
            const npc = NPC_TYPES[order.npcType];
            const orderType = ORDER_TYPES[order.type];
            const blueprint = BLUEPRINTS[order.requirements.blueprintId];
            
            if (!blueprint) return '';
            
            // Форматируем время для срочных заказов
            let timeLeft = '';
            if (order.type === 'urgent' && order.expiresAt) {
                const remaining = Math.max(0, order.expiresAt - Date.now());
                const minutes = Math.floor(remaining / 60000);
                const seconds = Math.floor((remaining % 60000) / 1000);
                timeLeft = `<div class="order-time urgent">
                    <i class="fas fa-clock"></i>
                    <span>${minutes}:${seconds.toString().padStart(2, '0')}</span>
                </div>`;
            }
            
            // Форматируем требования
            const requirements = this.formatOrderRequirements(order);
            
            // Форматируем награду
            const reward = this.formatOrderReward(order.reward);
            
            return `
                <div class="order-card" data-order-id="${order.id}">
                    <div class="order-header">
                        <div class="order-customer">
                            <i class="${npc.icon}"></i>
                            <div>
                                <h4>${order.customerName}</h4>
                                <span class="order-type">${orderType.name}</span>
                            </div>
                        </div>
                        ${timeLeft}
                    </div>
                    
                    <div class="order-body">
                        <div class="order-request">
                            <h5><i class="fas fa-${blueprint.type === 'weapon' ? 'sword' : 'shield-alt'}"></i> ${blueprint.name}</h5>
                            <div class="order-requirements">
                                ${requirements}
                            </div>
                        </div>
                        
                        <div class="order-reward">
                            <h5><i class="fas fa-trophy"></i> Награда</h5>
                            <div class="reward-details">
                                ${reward}
                            </div>
                        </div>
                    </div>
                    
                    <div class="order-footer">
                        <button class="btn-primary complete-order-btn" data-order-id="${order.id}">
                            <i class="fas fa-handshake"></i> Выполнить заказ
                        </button>
                        ${order.type === 'auction' ? `
                            <button class="btn-secondary bargain-btn" data-order-id="${order.id}">
                                <i class="fas fa-coins"></i> Торговаться
                            </button>
                        ` : ''}
                    </div>
                </div>
            `;
        }).join('');
        
        // Добавляем обработчики для кнопок
        document.querySelectorAll('.complete-order-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const orderId = e.currentTarget.dataset.orderId;
                this.showCompleteOrderModal(orderId);
            });
        });
        
        document.querySelectorAll('.bargain-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const orderId = e.currentTarget.dataset.orderId;
                this.game.modules.orders.bargain(orderId);
                this.updateOrdersList();
            });
        });
    }
    
    formatOrderRequirements(order) {
        const requirements = order.requirements;
        const items = [];
        
        // Качество
        if (requirements.minQuality > 2) {
            const qualityName = QUALITIES[requirements.minQuality - 1].name;
            items.push(`<span class="requirement-item"><i class="fas fa-star"></i> ${qualityName} или лучше</span>`);
        }
        
        // Статы
        for (const [statName, statReq] of Object.entries(requirements.requiredStats)) {
            const statNames = {
                damageMin: 'Мин. урон',
                damageMax: 'Макс. урон',
                attackSpeed: 'Скорость атаки',
                armor: 'Защита',
                durability: 'Прочность'
            };
            
            let reqText = `${statNames[statName] || statName}`;
            if (statReq.min !== null) reqText += ` ≥ ${statReq.min}`;
            if (statReq.max !== null) reqText += ` ≤ ${statReq.max}`;
            
            items.push(`<span class="requirement-item"><i class="fas fa-chart-line"></i> ${reqText}</span>`);
        }
        
        // Зачарования
        if (requirements.requiredEnchantments.length > 0) {
            requirements.requiredEnchantments.forEach(enchType => {
                const enchantment = ENCHANTMENTS[enchType];
                if (enchantment) {
                    items.push(`<span class="requirement-item" style="color: var(--color-secondary);">
                        <i class="fas fa-magic"></i> ${enchantment.name}
                    </span>`);
                }
            });
        }
        
        // Максимальная цена
        if (requirements.maxPrice) {
            items.push(`<span class="requirement-item"><i class="fas fa-coins"></i> Цена ≤ ${requirements.maxPrice}</span>`);
        }
        
        return items.join('');
    }
    
    formatOrderReward(reward) {
        const items = [];
        
        // Золото
        items.push(`<span class="reward-item gold"><i class="fas fa-coins"></i> ${reward.gold} золота</span>`);
        
        // Репутация
        for (const [faction, amount] of Object.entries(reward.reputation)) {
            if (amount > 0) {
                const factionNames = {
                    magesGuild: 'Гильдия магов',
                    royalGuard: 'Королевская гвардия',
                    adventurersGuild: 'Гильдия искателей'
                };
                items.push(`<span class="reward-item reputation">
                    <i class="fas fa-${faction === 'magesGuild' ? 'hat-wizard' : 'shield-alt'}"></i>
                    ${factionNames[faction] || faction}: +${amount}
                </span>`);
            }
        }
        
        // Предметы
        reward.items.forEach(item => {
            if (item.type === 'resource') {
                const resource = RESOURCES[item.id];
                if (resource) {
                    items.push(`<span class="reward-item resource">
                        <i class="${resource.icon}"></i>
                        ${resource.name} ×${item.amount}
                    </span>`);
                }
            } else if (item.type === 'blueprint') {
                const blueprint = BLUEPRINTS[item.id];
                if (blueprint) {
                    items.push(`<span class="reward-item blueprint">
                        <i class="fas fa-scroll"></i>
                        Чертеж: ${blueprint.name}
                    </span>`);
                }
            }
        });
        
        return items.join('');
    }
    
    showCompleteOrderModal(orderId) {
        const order = this.game.gameState.orders.find(o => o.id === orderId);
        if (!order) return;
        
        const suitableItems = this.game.inventory.items.filter(item => 
            this.game.modules.orders.checkItemFitsOrder(order, item)
        );
        
        // Создаем модальное окно
        const modalId = 'complete-order-modal';
        this.createModal(modalId, `
            <div class="modal-header">
                <h3><i class="fas fa-handshake"></i> Выполнение заказа</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="order-summary">
                    <h4>Заказ от ${order.customerName}</h4>
                    <p>${ORDER_TYPES[order.type].name}</p>
                </div>
                
                <div class="suitable-items-section">
                    <h5>Подходящие предметы:</h5>
                    ${suitableItems.length > 0 ? 
                        `<div class="items-list">
                            ${suitableItems.map(item => `
                                <div class="item-selector" data-item-id="${item.id}">
                                    <div class="item-preview">
                                        <span class="item-name" style="color: ${QUALITIES[item.quality-1].color}">
                                            ${item.name}
                                        </span>
                                        <div class="item-stats-preview">
                                            ${Object.entries(item.stats).map(([key, val]) => 
                                                `<span class="stat-preview">${key}: ${val}</span>`
                                            ).join('')}
                                        </div>
                                    </div>
                                    <button class="btn-primary select-item-btn" data-item-id="${item.id}">
                                        Выбрать
                                    </button>
                                </div>
                            `).join('')}
                        </div>` :
                        `<div class="no-suitable-items">
                            <i class="fas fa-exclamation-circle"></i>
                            <p>Нет подходящих предметов в инвентаре</p>
                        </div>`
                    }
                </div>
            </div>
            <div class="modal-footer">
                <button id="confirm-complete-order" class="btn-primary" ${suitableItems.length === 0 ? 'disabled' : ''}>
                    Выполнить заказ
                </button>
                <button class="btn-secondary modal-close">Отмена</button>
            </div>
        `);
        
        // Добавляем обработчики выбора предмета
        document.querySelectorAll('.select-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = e.currentTarget.dataset.itemId;
                this.selectItemForOrder(itemId);
            });
        });
        
        // Обработчик подтверждения
        document.getElementById('confirm-complete-order').addEventListener('click', () => {
            const selectedItemId = this.selectedOrderItem;
            if (selectedItemId) {
                const success = this.game.modules.orders.completeOrder(orderId, selectedItemId);
                if (success) {
                    this.hideModal();
                    this.updateOrdersList();
                    this.updateInventory(this.game.inventory);
                }
            }
        });
        
        this.showModal(modalId);
        this.selectedOrderItem = suitableItems.length > 0 ? suitableItems[0].id : null;
    }
    
    selectItemForOrder(itemId) {
        this.selectedOrderItem = itemId;
        
        // Визуально выделяем выбранный предмет
        document.querySelectorAll('.item-selector').forEach(el => {
            el.classList.remove('selected');
            if (el.dataset.itemId === itemId) {
                el.classList.add('selected');
            }
        });
        
        // Активируем кнопку подтверждения
        const confirmBtn = document.getElementById('confirm-complete-order');
        if (confirmBtn) {
            confirmBtn.disabled = false;
        }
    }
    
    createModal(modalId, content) {
        // Удаляем старую модалку, если есть
        const oldModal = document.getElementById(modalId);
        if (oldModal) {
            oldModal.remove();
        }
        
        // Создаем новую
        const modal = document.createElement('div');
        modal.id = modalId;
        modal.className = 'modal hidden';
        modal.innerHTML = content;
        
        document.body.appendChild(modal);
        
        // Добавляем обработчики закрытия
        modal.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => this.hideModal());
        });
        
        return modal;
    }
    
    loadReforgeScreen() {
        const content = document.getElementById('reforge-content');
        
        content.innerHTML = `
            <div class="reforge-layout">
                <div class="reforge-instructions">
                    <h3><i class="fas fa-fire"></i> Горн перековки</h3>
                    <p>Перековка позволяет изменить характеристики предмета. Качество и статы могут улучшиться или ухудшиться.</p>
                    <div class="warning">
                        <i class="fas fa-exclamation-triangle"></i>
                        <span>Внимание: есть риск разрушения предмета!</span>
                    </div>
                </div>
                
                <div class="reforge-interface">
                    <div class="item-selection">
                        <h4>Выберите предмет для перековки:</h4>
                        <div id="reforge-items-list" class="items-list">
                            <!-- Предметы будут здесь -->
                        </div>
                    </div>
                    
                    <div class="reforge-options">
                        <h4>Опции перековки:</h4>
                        <div class="options-grid">
                            <div class="option-group">
                                <label class="option-label">
                                    <input type="checkbox" id="preserve-quality" class="option-checkbox">
                                    <span>Сохранить качество</span>
                                </label>
                                <div class="option-description">
                                    Предотвращает изменение качества предмета. Удваивает стоимость.
                                </div>
                            </div>
                            
                            <div class="option-group">
                                <label class="option-label">
                                    <input type="checkbox" id="use-magic-essence" class="option-checkbox">
                                    <span>Использовать магическую эссенцию</span>
                                </label>
                                <div class="option-description">
                                    Гарантирует зачарование или улучшает существующее.
                                </div>
                            </div>
                            
                            <div class="option-group">
                                <label class="option-label">Фокусировка на характеристике:</label>
                                <select id="target-stat" class="option-select">
                                    <option value="">Случайная</option>
                                    <option value="damageMax">Максимальный урон</option>
                                    <option value="attackSpeed">Скорость атаки</option>
                                    <option value="armor">Защита</option>
                                    <option value="durability">Прочность</option>
                                </select>
                                <div class="option-description">
                                    Улучшает выбранную характеристику за счет других.
                                </div>
                            </div>
                        </div>
                        
                        <div class="reforge-summary">
                            <div class="summary-item">
                                <span>Стоимость:</span>
                                <span id="reforge-cost">0</span>
                            </div>
                            <div class="summary-item">
                                <span>Риск поломки:</span>
                                <span id="break-risk">0%</span>
                            </div>
                            <div class="summary-item">
                                <span>Ваше золото:</span>
                                <span id="current-gold">${this.game.player.gold}</span>
                            </div>
                        </div>
                        
                        <button id="reforge-btn" class="btn-primary" disabled>
                            <i class="fas fa-fire"></i> Перековать
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Обновляем список предметов
        this.updateReforgeItemsList();
        
        // Добавляем обработчики
        this.setupReforgeEventListeners();
    }
    
    updateReforgeItemsList() {
        const container = document.getElementById('reforge-items-list');
        if (!container) return;
        
        const reforgeableItems = this.game.modules.reforge.getReforgeableItems();
        
        if (reforgeableItems.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Нет предметов для перековки</p>
                    <p class="small">Создайте предметы в кузнице или уберите их с витрины</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = reforgeableItems.map(item => {
            const quality = QUALITIES[item.quality - 1];
            
            return `
                <div class="reforge-item-card ${this.selectedReforgeItem === item.id ? 'selected' : ''}" 
                     data-item-id="${item.id}">
                    <div class="item-preview">
                        <div class="item-name" style="color: ${quality.color}">
                            ${item.name}
                        </div>
                        <div class="item-stats">
                            ${Object.entries(item.stats).slice(0, 3).map(([key, val]) => 
                                `<span class="stat">${key}: ${val}</span>`
                            ).join('')}
                        </div>
                        <div class="item-value">
                            <i class="fas fa-coins"></i> ${item.value}
                        </div>
                    </div>
                    <div class="item-enchantments">
                        ${item.enchantments.length > 0 ? 
                            item.enchantments.map(ench => 
                                `<span class="enchantment">${ench.type} +${ench.value}</span>`
                            ).join('') : 
                            '<span class="no-enchantment">Без зачарования</span>'
                        }
                    </div>
                </div>
            `;
        }).join('');
        
        // Добавляем обработчики выбора
        document.querySelectorAll('.reforge-item-card').forEach(card => {
            card.addEventListener('click', () => {
                this.selectReforgeItem(card.dataset.itemId);
            });
        });
        
        // Выбираем первый предмет, если ничего не выбрано
        if (!this.selectedReforgeItem && reforgeableItems.length > 0) {
            this.selectReforgeItem(reforgeableItems[0].id);
        }
    }
    
    setupReforgeEventListeners() {
        // Обработчики изменения опций
        document.getElementById('preserve-quality')?.addEventListener('change', () => {
            this.updateReforgeSummary();
        });
        
        document.getElementById('use-magic-essence')?.addEventListener('change', () => {
            this.updateReforgeSummary();
        });
        
        document.getElementById('target-stat')?.addEventListener('change', () => {
            this.updateReforgeSummary();
        });
        
        // Кнопка перековки
        document.getElementById('reforge-btn')?.addEventListener('click', () => {
            this.executeReforge();
        });
    }
    
    selectReforgeItem(itemId) {
        this.selectedReforgeItem = itemId;
        
        // Визуально выделяем выбранный предмет
        document.querySelectorAll('.reforge-item-card').forEach(card => {
            card.classList.remove('selected');
            if (card.dataset.itemId === itemId) {
                card.classList.add('selected');
            }
        });
        
        // Обновляем сводку
        this.updateReforgeSummary();
    }
    
    updateReforgeSummary() {
        if (!this.selectedReforgeItem) {
            document.getElementById('reforge-cost').textContent = '0';
            document.getElementById('break-risk').textContent = '0%';
            document.getElementById('reforge-btn').disabled = true;
            return;
        }
        
        const item = this.game.modules.inventory.getItemById(this.selectedReforgeItem);
        if (!item) return;
        
        // Собираем опции
        const options = {
            preserveQuality: document.getElementById('preserve-quality')?.checked || false,
            useMagicEssence: document.getElementById('use-magic-essence')?.checked || false,
            targetStat: document.getElementById('target-stat')?.value || null
        };
        
        // Рассчитываем стоимость и риск
        const cost = this.game.modules.reforge.calculateReforgeCost(item, options);
        const risk = this.game.modules.reforge.calculateBreakRisk(item, options);
        
        // Обновляем отображение
        document.getElementById('reforge-cost').textContent = cost;
        document.getElementById('break-risk').textContent = `${Math.round(risk * 100)}%`;
        document.getElementById('current-gold').textContent = this.game.player.gold;
        
        // Проверяем, достаточно ли золота
        const canAfford = this.game.player.gold >= cost;
        const reforgeBtn = document.getElementById('reforge-btn');
        reforgeBtn.disabled = !canAfford;
        
        if (!canAfford) {
            reforgeBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Недостаточно золота';
        } else {
            reforgeBtn.innerHTML = `<i class="fas fa-fire"></i> Перековать (${cost} золота)`;
        }
    }
    
    executeReforge() {
        if (!this.selectedReforgeItem) return;
        
        // Собираем опции
        const options = {
            preserveQuality: document.getElementById('preserve-quality')?.checked || false,
            useMagicEssence: document.getElementById('use-magic-essence')?.checked || false,
            targetStat: document.getElementById('target-stat')?.value || null
        };
        
        // Выполняем перековку
        const success = this.game.modules.reforge.reforgeItem(this.selectedReforgeItem, options);
        
        if (success) {
            // Обновляем список предметов
            this.updateReforgeItemsList();
            this.updateReforgeSummary();
            this.updateInventory(this.game.inventory);
        }
    }
    
// В uiManager.js добавляем метод loadShopScreen:
loadShopScreen() {
    const content = document.getElementById('shop-content');
    
    content.innerHTML = `
        <div class="shop-layout">
            <div class="shop-tabs">
                <button class="shop-tab active" data-tab="buy">Покупка ресурсов</button>
                <button class="shop-tab" data-tab="sell">Продажа предметов</button>
                <button class="shop-tab" data-tab="showroom">Витрина</button>
                <button class="shop-tab" data-tab="merchants">Торговцы</button>
            </div>
            
            <div class="shop-content">
                <div id="shop-buy-tab" class="shop-tab-content active">
                    <h3><i class="fas fa-shopping-cart"></i> Покупка ресурсов</h3>
                    <div id="buy-resources-container" class="resources-grid"></div>
                </div>
                
                <div id="shop-sell-tab" class="shop-tab-content">
                    <h3><i class="fas fa-coins"></i> Продажа предметов</h3>
                    <div id="sell-items-container" class="items-grid"></div>
                </div>
                
                <div id="shop-showroom-tab" class="shop-tab-content">
                    <h3><i class="fas fa-store"></i> Витрина</h3>
                    <div class="showroom-info">
                        <p>Предметы на витрине продаются автоматически. Шанс продажи зависит от качества и цены.</p>
                        <div class="showroom-stats">
                            <span>Предметов на витрине: <span id="showroom-count">0</span></span>
                            <button id="process-sales-btn" class="btn-secondary">
                                <i class="fas fa-bolt"></i> Проверить продажи
                            </button>
                        </div>
                    </div>
                    <div id="showroom-container" class="items-grid"></div>
                </div>
                
                <div id="shop-merchants-tab" class="shop-tab-content">
                    <h3><i class="fas fa-users"></i> Торговцы</h3>
                    <div id="merchants-container" class="merchants-grid"></div>
                </div>
            </div>
            
            <div class="shop-sidebar">
                <div class="market-info">
                    <h4><i class="fas fa-chart-line"></i> Рынок</h4>
                    <div class="market-stats">
                        <div>Ваше золото: <strong id="shop-gold">${this.game.player.gold}</strong></div>
                        <div>День: <strong>${this.game.gameState.currentDay}</strong></div>
                        <button id="update-prices-btn" class="btn-secondary btn-sm">
                            <i class="fas fa-sync"></i> Обновить цены
                        </button>
                    </div>
                </div>
                
                <div class="price-history">
                    <h4>Изменение цен:</h4>
                    <div id="price-changes"></div>
                </div>
            </div>
        </div>
    `;
    
    // Инициализируем вкладки
    this.setupShopTabs();
    
    // Загружаем контент
    this.updateShopBuyTab();
    this.updateShopSellTab();
    this.updateShowroomTab();
    this.updateMerchantsTab();
    
    // Добавляем обработчики
    this.setupShopEventListeners();
}

setupShopTabs() {
    document.querySelectorAll('.shop-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tabId = e.currentTarget.dataset.tab;
            
            // Убираем активные классы
            document.querySelectorAll('.shop-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.shop-tab-content').forEach(c => c.classList.remove('active'));
            
            // Добавляем активные классы
            e.currentTarget.classList.add('active');
            document.getElementById(`shop-${tabId}-tab`).classList.add('active');
        });
    });
}

updateShopBuyTab() {
    const container = document.getElementById('buy-resources-container');
    if (!container || !this.game.modules.trading) return;
    
    const prices = this.game.gameState.marketPrices || {};
    const merchant = this.game.modules.trading.getMerchant('blacksmith_supplier');
    
    let html = '';
    
    if (merchant && merchant.inventory) {
        merchant.inventory.forEach(resourceId => {
            const resource = RESOURCES[resourceId];
            if (!resource) return;
            
            const price = this.game.modules.trading.getResourcePrice(resourceId);
            const merchantPrice = Math.round(price * (merchant.markup || 1.2));
            const playerGold = this.game.player.gold;
            const canAfford = playerGold >= merchantPrice;
            
            html += `
                <div class="resource-card ${canAfford ? 'can-buy' : 'cannot-buy'}">
                    <div class="resource-header">
                        <i class="${resource.icon}"></i>
                        <h4>${resource.name}</h4>
                        <span class="resource-tier">Тир ${resource.tier}</span>
                    </div>
                    <div class="resource-info">
                        <p class="resource-description">${resource.description}</p>
                        <div class="resource-price">
                            <span>Цена: ${merchantPrice} золота</span>
                            <span class="base-price">(Базовая: ${price})</span>
                        </div>
                    </div>
                    <div class="resource-actions">
                        <div class="quantity-selector">
                            <button class="qty-btn minus" data-resource="${resourceId}">-</button>
                            <input type="number" class="qty-input" id="qty-${resourceId}" value="1" min="1" max="100">
                            <button class="qty-btn plus" data-resource="${resourceId}">+</button>
                        </div>
                        <button class="btn-primary buy-btn" 
                                data-resource="${resourceId}" 
                                data-merchant="blacksmith_supplier"
                                ${!canAfford ? 'disabled' : ''}>
                            ${canAfford ? 'Купить' : 'Недостаточно золота'}
                        </button>
                    </div>
                </div>
            `;
        });
    }
    
    container.innerHTML = html || '<p>Нет доступных ресурсов для покупки</p>';
    
    // Добавляем обработчики количества
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const resourceId = e.currentTarget.dataset.resource;
            const input = document.getElementById(`qty-${resourceId}`);
            let value = parseInt(input.value) || 1;
            
            if (e.currentTarget.classList.contains('plus')) {
                value = Math.min(100, value + 1);
            } else {
                value = Math.max(1, value - 1);
            }
            
            input.value = value;
        });
    });
    
    // Добавляем обработчики покупки
    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const resourceId = e.currentTarget.dataset.resource;
            const merchantId = e.currentTarget.dataset.merchant;
            const input = document.getElementById(`qty-${resourceId}`);
            const amount = parseInt(input.value) || 1;
            
            this.game.modules.trading.buyResources(merchantId, resourceId, amount);
            this.updateShopBuyTab();
            this.updateShopGold();
        });
    });
}

updateShopSellTab() {
    const container = document.getElementById('sell-items-container');
    if (!container) return;
    
    const items = this.game.modules.inventory.getItemsForDisplay();
    
    if (items.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Нет предметов для продажи</p></div>';
        return;
    }
    
    let html = '';
    
    // Группируем торговцев
    const merchants = this.game.modules.trading.getAvailableMerchants().filter(m => m.type === 'buyer');
    
    items.forEach(item => {
        const quality = QUALITIES[item.quality - 1];
        
        html += `
            <div class="sell-item-card">
                <div class="item-header">
                    <div class="item-name" style="color: ${quality.color}">${item.name}</div>
                    <div class="item-base-value">${item.value} золота</div>
                </div>
                
                <div class="item-stats">
                    ${Object.entries(item.stats).slice(0, 2).map(([key, val]) => 
                        `<span class="stat">${key}: ${val}</span>`
                    ).join('')}
                </div>
                
                <div class="merchant-offers">
                    ${merchants.map(merchant => {
                        if (!this.game.modules.trading.isItemSuitableForMerchant(merchant, item)) {
                            return '';
                        }
                        
                        const offer = this.game.modules.trading.calculateMerchantPrice(merchant, item);
                        const canSell = merchant.budget >= offer;
                        
                        return `
                            <div class="merchant-offer ${canSell ? 'can-sell' : 'cannot-sell'}">
                                <div class="merchant-info">
                                    <i class="fas fa-user"></i>
                                    <span>${merchant.name}</span>
                                </div>
                                <div class="offer-price">${offer} золота</div>
                                <button class="btn-secondary btn-sm sell-to-merchant-btn"
                                        data-item="${item.id}"
                                        data-merchant="${merchant.id}"
                                        ${!canSell ? 'disabled' : ''}>
                                    ${canSell ? 'Продать' : 'Нет бюджета'}
                                </button>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="quick-sell">
                    <button class="btn-primary quick-sell-btn" data-item="${item.id}">
                        Быстрая продажа (${Math.round(item.value * 0.7)} золота)
                    </button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Добавляем обработчики
    document.querySelectorAll('.sell-to-merchant-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = e.currentTarget.dataset.item;
            const merchantId = e.currentTarget.dataset.merchant;
            
            this.game.modules.trading.sellItemToMerchant(merchantId, itemId);
            this.updateShopSellTab();
            this.updateShopGold();
            this.updateMerchantsTab();
        });
    });
    
    document.querySelectorAll('.quick-sell-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = e.currentTarget.dataset.item;
            const price = Math.round(this.game.modules.inventory.getItemById(itemId).value * 0.7);
            
            if (confirm(`Продать за ${price} золота?`)) {
                this.game.modules.inventory.sellItem(itemId, 0.7);
                this.updateShopSellTab();
                this.updateShopGold();
            }
        });
    });
}

updateShowroomTab() {
    const container = document.getElementById('showroom-container');
    const countElement = document.getElementById('showroom-count');
    
    if (!container) return;
    
    const showroomItems = this.game.forge.showroom.map(id => 
        this.game.modules.inventory.getItemById(id)
    ).filter(item => item);
    
    if (countElement) {
        countElement.textContent = showroomItems.length;
    }
    
    if (showroomItems.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Витрина пуста</p></div>';
        return;
    }
    
    let html = showroomItems.map(item => {
        const quality = QUALITIES[item.quality - 1];
        
        return `
            <div class="showroom-item">
                <div class="item-preview">
                    <div class="item-name" style="color: ${quality.color}">${item.name}</div>
                    <div class="item-value">${item.value} золота</div>
                </div>
                <div class="showroom-actions">
                    <button class="btn-secondary remove-from-showroom-btn" data-item="${item.id}">
                        <i class="fas fa-times"></i> Убрать
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = html;
    
    // Обработчики для кнопок
    document.querySelectorAll('.remove-from-showroom-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = e.currentTarget.dataset.item;
            this.game.modules.inventory.removeFromShowroom(itemId);
            this.updateShowroomTab();
        });
    });
}

updateMerchantsTab() {
    const container = document.getElementById('merchants-container');
    if (!container || !this.game.modules.trading) return;
    
    const merchants = this.game.modules.trading.getAvailableMerchants();
    
    if (merchants.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Нет доступных торговцев</p></div>';
        return;
    }
    
    let html = merchants.map(merchant => {
        const isUnlocked = merchant.unlocked;
        const reputation = merchant.reputation || 0;
        
        return `
            <div class="merchant-card ${isUnlocked ? 'unlocked' : 'locked'}">
                <div class="merchant-header">
                    <div class="merchant-icon">
                        <i class="fas fa-${merchant.type === 'resource' ? 'shopping-cart' : 'coins'}"></i>
                    </div>
                    <div class="merchant-info">
                        <h4>${merchant.name}</h4>
                        <p class="merchant-type">${merchant.type === 'resource' ? 'Продавец' : 'Покупатель'}</p>
                    </div>
                    <div class="merchant-status">
                        ${isUnlocked ? 
                            '<span class="status-unlocked"><i class="fas fa-check"></i> Доступен</span>' : 
                            `<span class="status-locked">Требуется: ${merchant.reputation} репутации</span>`
                        }
                    </div>
                </div>
                
                <div class="merchant-body">
                    <p class="merchant-description">${merchant.description}</p>
                    
                    <div class="merchant-stats">
                        <div class="stat">
                            <span>Репутация:</span>
                            <span class="reputation-value">${reputation}</span>
                        </div>
                        
                        ${merchant.type === 'buyer' ? `
                            <div class="stat">
                                <span>Бюджет:</span>
                                <span class="budget-value">${merchant.budget} золота</span>
                            </div>
                        ` : `
                            <div class="stat">
                                <span>Наценка:</span>
                                <span class="markup-value">${Math.round((merchant.markup - 1) * 100)}%</span>
                            </div>
                        `}
                    </div>
                </div>
                
                ${merchant.type === 'resource' && merchant.inventory ? `
                    <div class="merchant-inventory">
                        <h5>Ассортимент:</h5>
                        <div class="inventory-items">
                            ${merchant.inventory.map(resId => {
                                const res = RESOURCES[resId];
                                return res ? `<span class="inventory-item">${res.name}</span>` : '';
                            }).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
    
    container.innerHTML = html;
}

updateShopGold() {
    const goldElement = document.getElementById('shop-gold');
    if (goldElement) {
        goldElement.textContent = this.game.player.gold;
    }
}

setupShopEventListeners() {
    // Кнопка обновления цен
    document.getElementById('update-prices-btn')?.addEventListener('click', () => {
        if (this.game.modules.trading) {
            this.game.modules.trading.updateMarketPrices(true);
            this.showNotification('Цены обновлены', 'info');
            this.updateShopBuyTab();
        }
    });
    
    // Кнопка проверки продаж
    document.getElementById('process-sales-btn')?.addEventListener('click', () => {
        if (this.game.modules.trading) {
            const soldItems = this.game.modules.trading.processShowroomSales();
            this.updateShowroomTab();
            this.updateShopGold();
            
            if (soldItems.length > 0) {
                this.showNotification(`Продано ${soldItems.length} предметов с витрины!`, 'success');
            }
        }
    });
}

    // Обновляем метод switchScreen для загрузки контента горна
    loadScreenContent(screenName) {
        const contentElement = document.getElementById(`${screenName}-content`);
        if (!contentElement || contentElement.children.length > 0) return;
        
        switch(screenName) {
            case 'forge':
                this.loadForgeScreen();
                break;
            case 'reforge':
                this.loadReforgeScreen(); // ← ДОБАВИЛИ
                break;
            case 'shop':
                this.loadShopScreen();
                break;
            case 'orders':
                this.loadOrdersScreen();
                break;
            case 'character':
                this.loadCharacterScreen();
                break;
            case 'upgrade':
                this.loadUpgradeScreen();
                break;
        }
    }

    // Обновляем метод switchScreen для загрузки контента заказов
    loadScreenContent(screenName) {
        const contentElement = document.getElementById(`${screenName}-content`);
        if (!contentElement || contentElement.children.length > 0) return;
        
        switch(screenName) {
            case 'forge':
                this.loadForgeScreen();
                break;
            case 'shop':
                this.loadShopScreen();
                break;
            case 'orders':
                this.loadOrdersScreen(); // ← ДОБАВИЛИ
                break;
            case 'character':
                this.loadCharacterScreen();
                break;
            case 'upgrade':
                this.loadUpgradeScreen();
                break;
        }
    }

    switchScreen(screenName) {
        // Убрать активный класс со всех экранов и кнопок
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Показать выбранный экран
        const screenElement = document.getElementById(`${screenName}-screen`);
        if (screenElement) {
            screenElement.classList.add('active');
            
            // Активировать соответствующую кнопку навигации
            const navBtn = document.querySelector(`.nav-btn[data-screen="${screenName}"]`);
            if (navBtn) {
                navBtn.classList.add('active');
            }
            
            // Загрузить контент экрана, если он пустой
            this.loadScreenContent(screenName);
        }
    }
    
    loadScreenContent(screenName) {
        const contentElement = document.getElementById(`${screenName}-content`);
        if (!contentElement || contentElement.children.length > 0) return;
        
        switch(screenName) {
            case 'forge':
                this.loadForgeScreen();
                break;
            case 'shop':
                this.loadShopScreen();
                break;
            case 'character':
                this.loadCharacterScreen();
                break;
            case 'upgrade':
                this.loadUpgradeScreen();
                break;
            // Остальные экраны будут добавлены позже
        }
    }
    
    loadForgeScreen() {
        const contentElement = document.getElementById('forge-content');
        contentElement.innerHTML = `
            <div class="forge-layout">
                <div class="crafting-panel">
                    <h3><i class="fas fa-hammer"></i> Доступные чертежи</h3>
                    <div id="blueprints-container" class="cards-container"></div>
                </div>
                <div class="active-crafts-panel">
                    <h3><i class="fas fa-fire"></i> Текущая работа</h3>
                    <div id="active-crafts-container" class="crafts-container"></div>
                </div>
            </div>
        `;
        
        // Обновляем содержимое
        this.updateBlueprints(BLUEPRINTS, this.game.inventory.blueprints);
        this.updateActiveCrafts(this.game.forge.activeCrafts);
        
        // Добавляем обработчики для чертежей
        setTimeout(() => {
            document.querySelectorAll('.blueprint-card').forEach(card => {
                card.addEventListener('click', () => {
                    const blueprintId = card.dataset.blueprintId;
                    this.showCraftModal(blueprintId);
                });
            });
        }, 100);
    }
    
    updateBlueprints(blueprints, unlockedBlueprints) {
        const container = document.getElementById('blueprints-container') || 
                         document.getElementById('blueprints-list');
        
        if (!container) return;
        
        const availableBlueprints = this.game.modules.crafting.getAvailableBlueprints();
        
        if (availableBlueprints.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-scroll"></i>
                    <p>Нет доступных чертежей</p>
                    <p class="small">Изучите новые чертежи или повысьте уровень</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = availableBlueprints.map(blueprint => {
            const canCraft = this.game.modules.crafting.hasEnoughResources(blueprint.id);
            const materialsList = blueprint.materials.map(mat => {
                const resource = RESOURCES[mat.resourceId];
                const available = this.game.inventory.resources[mat.resourceId] || 0;
                const hasEnough = available >= mat.amount;
                
                return `
                    <div class="material-item ${hasEnough ? 'has-enough' : 'not-enough'}">
                        <i class="${resource?.icon || 'fas fa-question'}"></i>
                        <span>${resource?.name || mat.resourceId}: ${mat.amount}</span>
                        <span class="material-amount">(${available})</span>
                    </div>
                `;
            }).join('');
            
            return `
                <div class="card blueprint-card ${canCraft ? 'can-craft' : 'cannot-craft'}" 
                     data-blueprint-id="${blueprint.id}">
                    <div class="card-header">
                        <i class="fas fa-${blueprint.type === 'weapon' ? 'sword' : 'shield-alt'}"></i>
                        <h4>${blueprint.name}</h4>
                        <span class="card-badge">Ур. ${blueprint.requiredLevel}</span>
                    </div>
                    <div class="card-body">
                        <p class="card-description">${blueprint.description}</p>
                        <div class="materials-section">
                            <p class="section-title">Материалы:</p>
                            <div class="materials-list">
                                ${materialsList}
                            </div>
                        </div>
                        <div class="craft-time">
                            <i class="fas fa-clock"></i>
                            <span>Время: ${blueprint.timeToCraft} сек.</span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn-primary craft-btn" ${!canCraft ? 'disabled' : ''}>
                            ${canCraft ? 'Ковать' : 'Недостаточно материалов'}
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    updateActiveCrafts(activeCrafts) {
        const container = document.getElementById('active-crafts-container') || 
                         document.getElementById('active-crafts');
        
        if (!container) return;
        
        if (activeCrafts.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-hammer"></i>
                    <p>Нет активных работ</p>
                    <p class="small">Выберите чертеж и начните ковку</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = activeCrafts.map(craft => {
            const blueprint = BLUEPRINTS[craft.blueprintId];
            if (!blueprint) return '';
            
            const now = Date.now();
            const remaining = Math.max(0, craft.finishTime - now);
            const progress = 100 - (remaining / (blueprint.timeToCraft * 1000)) * 100;
            
            const formatTime = (ms) => {
                const seconds = Math.ceil(ms / 1000);
                return `${seconds} сек.`;
            };
            
            return `
                <div class="active-craft" data-craft-id="${craft.id}">
                    <div class="craft-header">
                        <h4>${blueprint.name}</h4>
                        <button class="btn-secondary btn-sm cancel-craft-btn" data-craft-id="${craft.id}">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="craft-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                        <span class="progress-text">${formatTime(remaining)}</span>
                    </div>
                    <div class="craft-timer">
                        <i class="fas fa-hourglass-half"></i>
                        <span>Завершится через: ${formatTime(remaining)}</span>
                    </div>
                </div>
            `;
        }).join('');
        
        // Добавляем обработчики для кнопок отмены
        document.querySelectorAll('.cancel-craft-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const craftId = e.currentTarget.dataset.craftId;
                this.game.modules.crafting.cancelCrafting(craftId);
            });
        });
    }
    
    updateInventory(inventory) {
        this.updateResources(inventory.resources);
        this.updateItems(inventory.items);
    }
    
    updateResources(resources) {
        const container = document.getElementById('inventory-resources');
        if (!container) return;
        
        const resourceList = this.game.modules.inventory.getResourcesForDisplay();
        
        if (resourceList.length === 0) {
            container.innerHTML = `
                <div class="empty-state small">
                    <i class="fas fa-box-open"></i>
                    <p>Ресурсов нет</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = resourceList.map(resource => {
            return `
                <div class="inventory-item resource-item">
                    <div class="item-icon">
                        <i class="${resource.icon}"></i>
                    </div>
                    <div class="item-info">
                        <div class="item-name">${resource.name}</div>
                        <div class="item-amount">${resource.amount}</div>
                    </div>
                    <div class="item-tier">Тир ${resource.tier}</div>
                </div>
            `;
        }).join('');
    }
    
    updateItems(items) {
        const container = document.getElementById('inventory-items');
        if (!container) return;
        
        const itemList = this.game.modules.inventory.getItemsForDisplay();
        
        if (itemList.length === 0) {
            container.innerHTML = `
                <div class="empty-state small">
                    <i class="fas fa-shield-alt"></i>
                    <p>Предметов нет</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = itemList.slice(0, 10).map(item => {
            const quality = QUALITIES[item.quality - 1];
            
            // Форматирование статов
            const statsText = Object.entries(item.stats).map(([key, value]) => {
                const statNames = {
                    damageMin: 'Мин. урон',
                    damageMax: 'Макс. урон',
                    attackSpeed: 'Скорость',
                    armor: 'Защита',
                    durability: 'Прочность',
                    weight: 'Вес'
                };
                return `<span class="stat-item">${statNames[key] || key}: ${value}</span>`;
            }).join('');
            
            // Зачарования
            const enchantmentsText = item.enchantments.length > 0 ? 
                item.enchantments.map(ench => 
                    `<span class="enchantment-item" style="color: ${quality.color}">${ench.type} +${ench.value}</span>`
                ).join('') : 
                '<span class="no-enchantment">Без зачарования</span>';
            
            return `
                <div class="inventory-item item-card" data-item-id="${item.id}">
                    <div class="item-header">
                        <div class="item-name" style="color: ${quality.color}">${item.name}</div>
                        <div class="item-value">
                            <i class="fas fa-coins"></i>
                            <span>${item.value}</span>
                        </div>
                    </div>
                    <div class="item-stats">
                        ${statsText}
                    </div>
                    <div class="item-enchantments">
                        ${enchantmentsText}
                    </div>
                    <div class="item-actions">
                        <button class="btn-secondary btn-sm sell-item-btn" data-item-id="${item.id}">
                            <i class="fas fa-coins"></i> Продать
                        </button>
                        <button class="btn-secondary btn-sm showroom-btn" data-item-id="${item.id}">
                            <i class="fas fa-store"></i> Витрина
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        
        // Добавляем обработчики для кнопок продажи
        document.querySelectorAll('.sell-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = e.currentTarget.dataset.itemId;
                this.game.modules.inventory.sellItem(itemId);
            });
        });
        
        document.querySelectorAll('.showroom-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = e.currentTarget.dataset.itemId;
                this.game.modules.inventory.addToShowroom(itemId);
            });
        });
    }
    
    showCraftModal(blueprintId) {
        const blueprint = BLUEPRINTS[blueprintId];
        if (!blueprint) return;
        
        const canCraft = this.game.modules.crafting.hasEnoughResources(blueprintId);
        
        // Заполняем модальное окно
        document.getElementById('craft-modal-title').textContent = `Ковка: ${blueprint.name}`;
        
        const preview = document.getElementById('craft-preview');
        preview.innerHTML = `
            <div class="craft-preview-content">
                <div class="preview-header">
                    <i class="fas fa-${blueprint.type === 'weapon' ? 'sword' : 'shield-alt'} fa-3x"></i>
                    <div class="preview-info">
                        <h4>${blueprint.name}</h4>
                        <p class="preview-description">${blueprint.description}</p>
                    </div>
                </div>
                <div class="preview-materials">
                    <h5>Требуемые материалы:</h5>
                    ${blueprint.materials.map(mat => {
                        const resource = RESOURCES[mat.resourceId];
                        const available = this.game.inventory.resources[mat.resourceId] || 0;
                        const hasEnough = available >= mat.amount;
                        
                        return `
                            <div class="preview-material ${hasEnough ? '' : 'insufficient'}">
                                <i class="${resource?.icon || 'fas fa-question'}"></i>
                                <span>${resource?.name || mat.resourceId}</span>
                                <span class="material-count">${mat.amount}</span>
                                <span class="material-available">Доступно: ${available}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div class="preview-time">
                    <i class="fas fa-clock"></i>
                    <span>Время ковки: ${blueprint.timeToCraft} секунд</span>
                </div>
            </div>
        `;
        
        const options = document.getElementById('craft-options');
        options.innerHTML = canCraft ? 
            `<p class="can-craft-message"><i class="fas fa-check-circle"></i> Достаточно материалов для ковки</p>` :
            `<p class="cannot-craft-message"><i class="fas fa-exclamation-circle"></i> Недостаточно материалов</p>`;
        
        // Настройка кнопок
        const startBtn = document.getElementById('start-craft-btn');
        startBtn.disabled = !canCraft;
        startBtn.onclick = () => {
            this.game.modules.crafting.startCrafting(blueprintId);
            this.hideModal();
        };
        
        this.showModal('craft-modal');
    }
    
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        const overlay = document.getElementById('modal-overlay');
        
        if (modal && overlay) {
            this.currentModal = modalId;
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        }
    }
    
    hideModal() {
        if (this.currentModal) {
            const modal = document.getElementById(this.currentModal);
            const overlay = document.getElementById('modal-overlay');
            
            if (modal) modal.classList.add('hidden');
            if (overlay) overlay.classList.add('hidden');
            
            this.currentModal = null;
        }
    }
    
    showNotification(message, type = 'info') {
        const container = document.getElementById('toast-container') || 
                         document.getElementById('notification-area');
        
        if (!container) return;
        
        const toastId = 'toast_' + Date.now();
        
        // Определяем стили по типу уведомления
        const typeConfig = {
            success: { icon: 'fas fa-check-circle', color: 'var(--color-success)' },
            error: { icon: 'fas fa-exclamation-circle', color: 'var(--color-danger)' },
            warning: { icon: 'fas fa-exclamation-triangle', color: 'var(--color-warning)' },
            info: { icon: 'fas fa-info-circle', color: 'var(--color-secondary)' }
        };
        
        const config = typeConfig[type] || typeConfig.info;
        
        // Создаем уведомление
        const toast = document.createElement('div');
        toast.id = toastId;
        toast.className = 'toast-notification';
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-card);
            border-left: 4px solid ${config.color};
            padding: 15px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            z-index: 1002;
            min-width: 300px;
            max-width: 400px;
            animation: slideIn 0.3s ease;
        `;
        
        toast.innerHTML = `
            <div class="toast-content">
                <div class="toast-header">
                    <i class="${config.icon}" style="color: ${config.color}; margin-right: 10px;"></i>
                    <strong style="color: ${config.color}">${type.charAt(0).toUpperCase() + type.slice(1)}</strong>
                    <button class="toast-close" style="margin-left: auto; background: none; border: none; color: var(--color-text-secondary); cursor: pointer;">
                        &times;
                    </button>
                </div>
                <div class="toast-body" style="margin-top: 10px;">
                    ${message}
                </div>
            </div>
        `;
        
        // Добавляем в контейнер
        if (container.id === 'toast-container') {
            container.appendChild(toast);
        } else {
            // Для футера просто обновляем текст
            container.innerHTML = `<div class="notification">${message}</div>`;
            return;
        }
        
        // Обработчик закрытия
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            this.removeToast(toastId);
        });
        
        // Автоматическое закрытие через 5 секунд
        setTimeout(() => {
            this.removeToast(toastId);
        }, 5000);
    }
    
    removeToast(toastId) {
        const toast = document.getElementById(toastId);
        if (toast) {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }
    }
    
    // Методы для других экранов (заглушки)
    loadShopScreen() {
        const content = document.getElementById('shop-content');
        content.innerHTML = `
            <div class="shop-layout">
                <div class="shop-panel">
                    <h3><i class="fas fa-shopping-cart"></i> Покупка ресурсов</h3>
                    <div id="market-resources" class="cards-container"></div>
                </div>
                <div class="shop-panel">
                    <h3><i class="fas fa-store"></i> Витрина</h3>
                    <div id="showroom-items" class="cards-container"></div>
                </div>
            </div>
        `;
        
        // TODO: Реализовать отображение рынка и витрины
        content.innerHTML += `
            <div class="empty-state">
                <i class="fas fa-tools"></i>
                <p>Раздел в разработке</p>
                <p class="small">Торговля будет доступна в следующем обновлении</p>
            </div>
        `;
    }
    
    loadCharacterScreen() {
        const content = document.getElementById('character-content');
        const player = this.game.player;
        
        content.innerHTML = `
            <div class="character-layout">
                <div class="character-stats">
                    <h3><i class="fas fa-chart-line"></i> Статистика</h3>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-label">Уровень</div>
                            <div class="stat-value">${player.level}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-label">Опыт</div>
                            <div class="stat-value">${player.exp}/${player.expToNextLevel}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-label">Золото</div>
                            <div class="stat-value">${player.gold}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-label">День</div>
                            <div class="stat-value">${this.game.gameState.currentDay}</div>
                        </div>
                    </div>
                </div>
                
                <div class="skills-section">
                    <h3><i class="fas fa-star"></i> Навыки</h3>
                    <div class="skills-grid">
                        ${Object.entries(player.skills).map(([skillId, skill]) => {
                            const skillNames = {
                                weaponsmith: 'Оружейник',
                                armorsmith: 'Доспешник',
                                enchanter: 'Зачарователь',
                                merchant: 'Торговец'
                            };
                            
                            const skillIcons = {
                                weaponsmith: 'fas fa-sword',
                                armorsmith: 'fas fa-shield-alt',
                                enchanter: 'fas fa-hat-wizard',
                                merchant: 'fas fa-coins'
                            };
                            
                            return `
                                <div class="skill-card">
                                    <div class="skill-header">
                                        <i class="${skillIcons[skillId]}"></i>
                                        <h4>${skillNames[skillId]}</h4>
                                    </div>
                                    <div class="skill-level">Уровень ${skill.level}</div>
                                    <div class="skill-exp">
                                        <div class="exp-bar">
                                            <div class="exp-fill" style="width: ${(skill.exp / skill.expToNextLevel) * 100}%"></div>
                                        </div>
                                        <span class="exp-text">${skill.exp}/${skill.expToNextLevel}</span>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    
    loadUpgradeScreen() {
        const content = document.getElementById('upgrade-content');
        content.innerHTML = `
            <div class="upgrades-layout">
                <h3><i class="fas fa-tools"></i> Улучшения кузницы</h3>
                <div class="upgrades-grid" id="upgrades-grid"></div>
            </div>
        `;
        
        // TODO: Реализовать систему улучшений
        document.getElementById('upgrades-grid').innerHTML = `
            <div class="empty-state">
                <i class="fas fa-hammer"></i>
                <p>Система улучшений в разработке</p>
                <p class="small">Улучшения кузницы будут доступны в следующем обновлении</p>
            </div>
        `;
    }
}