// src/js/main.js
document.addEventListener('DOMContentLoaded', () => {

    // Инициализируем игру
    try {
        const game = initGame();
        console.log('Игра "Кузница Судьбы" успешно запущена!');
        
        // Тестовое уведомление
        setTimeout(() => {
            game.ui.showNotification('Добро пожаловать в Кузницу Судьбы! Начните с ковки простого меча.', 'info');
            
            // Если заказов нет, создаем тестовые
            if (game.gameState.orders.length === 0) {
                setTimeout(() => {
                    game.modules.orders.generateDailyOrders(2);
                    game.ui.showNotification('Появились новые заказы на доске объявлений!', 'info');
                }, 2000);
            }
        }, 1000);
        
    } catch (error) {
        console.error('Ошибка при запуске игры:', error);
        alert('Произошла ошибка при загрузке игры. Пожалуйста, обновите страницу.');
    }

    // Добавляем стили для анимаций
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .progress-bar {
            width: 100%;
            height: 8px;
            background: var(--color-dark);
            border-radius: 4px;
            overflow: hidden;
            margin: 8px 0;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(to right, var(--color-secondary), var(--color-accent));
            border-radius: 4px;
            transition: width 0.5s ease;
        }
        
        .exp-bar {
            width: 100%;
            height: 6px;
            background: var(--color-dark);
            border-radius: 3px;
            overflow: hidden;
        }
        
        .exp-fill {
            height: 100%;
            background: linear-gradient(to right, var(--color-success), #32CD32);
            border-radius: 3px;
        }
        
        .btn-sm {
            padding: 5px 10px;
            font-size: 0.9rem;
        }
        
        .materials-list {
            margin-top: 10px;
        }
        
        .material-item {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 4px 0;
            font-size: 0.9rem;
        }
        
        .material-item.has-enough {
            color: var(--color-success);
        }
        
        .material-item.not-enough {
            color: var(--color-danger);
        }
        
        .material-amount {
            margin-left: auto;
            font-size: 0.8rem;
            opacity: 0.8;
        }
        
        .active-craft {
            background: linear-gradient(145deg, #3a3a3a, #2d2d2d);
            border-radius: var(--border-radius);
            padding: 15px;
            margin-bottom: 10px;
            border: 1px solid var(--color-primary);
        }
        
        .craft-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        
        .inventory-item {
            background: rgba(0, 0, 0, 0.2);
            border-radius: var(--border-radius);
            padding: 10px;
            margin-bottom: 8px;
            border: 1px solid var(--color-primary);
        }
        
        .resource-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .item-icon {
            font-size: 1.2rem;
            color: var(--color-secondary);
        }
        
        .item-info {
            flex: 1;
        }
        
        .item-name {
            font-weight: 500;
        }
        
        .item-amount {
            font-size: 0.9rem;
            color: var(--color-text-secondary);
        }
        
        .item-tier {
            background: var(--color-dark);
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 0.8rem;
        }
        
        .item-card .item-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }
        
        .item-stats {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 8px 0;
            font-size: 0.85rem;
        }
        
        .stat-item {
            background: rgba(139, 69, 19, 0.2);
            padding: 2px 6px;
            border-radius: 4px;
        }
        
        .item-enchantments {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin: 8px 0;
            font-size: 0.85rem;
        }
        
        .enchantment-item {
            background: rgba(184, 134, 11, 0.2);
            padding: 2px 6px;
            border-radius: 4px;
        }
        
        .no-enchantment {
            color: var(--color-text-secondary);
            font-style: italic;
        }
        
        .item-actions {
            display: flex;
            gap: 8px;
            margin-top: 10px;
        }
        
        .card-badge {
            background: var(--color-secondary);
            color: #000;
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 0.8rem;
            margin-left: auto;
        }
        
        .section-title {
            font-size: 0.9rem;
            color: var(--color-text-secondary);
            margin-bottom: 5px;
        }
        
        .card-footer {
            margin-top: 15px;
            padding-top: 10px;
            border-top: 1px solid var(--color-primary);
        }
        
        .craft-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .can-craft {
            border-color: var(--color-success);
        }
        
        .cannot-craft {
            border-color: var(--color-danger);
        }
        
        .small {
            font-size: 0.9rem;
        }
        
        .forge-layout, .shop-layout, .character-layout {
            display: grid;
            gap: 20px;
        }
        
        @media (min-width: 992px) {
            .forge-layout {
                grid-template-columns: 2fr 1fr;
            }
            
            .shop-layout {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        .stats-grid, .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 15px;
        }
        
        .stat-card, .skill-card {
            background: linear-gradient(145deg, #3a3a3a, #2d2d2d);
            border-radius: var(--border-radius);
            padding: 15px;
            border: 1px solid var(--color-primary);
        }
        
        .stat-label {
            font-size: 0.9rem;
            color: var(--color-text-secondary);
            margin-bottom: 5px;
        }
        
        .stat-value {
            font-size: 1.5rem;
            font-weight: 500;
            color: var(--color-secondary);
        }
        
        .skill-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }
        
        .skill-header i {
            font-size: 1.5rem;
            color: var(--color-secondary);
        }
        
        .skill-level {
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }
        
        .exp-text {
            font-size: 0.8rem;
            color: var(--color-text-secondary);
            margin-top: 4px;
            display: block;
        }
        
        #toast-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1002;
        }
    `;
    document.head.appendChild(style);
    
    // Создаем контейнер для тостов, если его нет
    if (!document.getElementById('toast-container')) {
        const toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    
    // Инициализируем игру
    try {
        const game = initGame();
        console.log('Игра "Кузница Судьбы" успешно запущена!');
        
        // Тестовое уведомление
        setTimeout(() => {
            game.ui.showNotification('Добро пожаловать в Кузницу Судьбы! Начните с ковки простого меча.', 'info');
        }, 1000);
        
    } catch (error) {
        console.error('Ошибка при запуске игры:', error);
        alert('Произошла ошибка при загрузке игры. Пожалуйста, обновите страницу.');
    }
});