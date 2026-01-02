// src/js/modules/inventory.js
class InventoryModule {
    constructor(game) {
        this.game = game;
    }
    
    // Проверить, есть ли место в инвентаре
    hasSpaceForItems(count = 1) {
        const currentItems = this.game.inventory.items.length;
        const maxCapacity = CONFIG.BASE_STORAGE_CAPACITY;
        return currentItems + count <= maxCapacity;
    }
    
    // Получить ресурсы в удобном формате для отображения
    getResourcesForDisplay() {
        const resources = [];
        
        for (const [resourceId, amount] of Object.entries(this.game.inventory.resources)) {
            if (amount > 0 && RESOURCES[resourceId]) {
                resources.push({
                    ...RESOURCES[resourceId],
                    amount: amount
                });
            }
        }
        
        // Сортировка по типу и тиру
        return resources.sort((a, b) => {
            if (a.type !== b.type) return a.type.localeCompare(b.type);
            if (a.tier !== b.tier) return a.tier - b.tier;
            return a.name.localeCompare(b.name);
        });
    }
    
    // Получить предметы в удобном формате для отображения
    getItemsForDisplay(filter = {}) {
        let items = [...this.game.inventory.items];
        
        // Применение фильтров
        if (filter.type) {
            items = items.filter(item => item.type === filter.type);
        }
        
        if (filter.quality) {
            items = items.filter(item => item.quality === filter.quality);
        }
        
        if (filter.minValue) {
            items = items.filter(item => item.value >= filter.minValue);
        }
        
        // Сортировка
        items.sort((a, b) => {
            if (a.quality !== b.quality) return b.quality - a.quality; // Сначала лучше качество
            if (a.value !== b.value) return b.value - a.value; // Сначала дороже
            return b.createdAt - a.createdAt; // Сначала новее
        });
        
        return items;
    }
    
    // Получить предмет по ID
    getItemById(itemId) {
        return this.game.inventory.items.find(item => item.id === itemId);
    }
    
    // Можно ли продать предмет (не в крафте и т.д.)
    canSellItem(itemId) {
        const item = this.getItemById(itemId);
        if (!item) return false;
        
        // Проверить, не выставлен ли предмет на витрине
        if (this.game.forge.showroom.includes(itemId)) {
            return false;
        }
        
        return true;
    }
    
    // Продать предмет
    sellItem(itemId, priceModifier = 1.0) {
        if (!this.canSellItem(itemId)) return false;
        
        const item = this.getItemById(itemId);
        if (!item) return false;
        
        // Расчет цены с учетом навыка торговли
        let price = item.value;
        const merchantBonus = this.game.modules.progression.getSkillBonus('merchant', 1);
        price *= merchantBonus * priceModifier;
        price = Math.round(price);
        
        // Удалить предмет и добавить золото
        if (this.game.removeItem(itemId)) {
            this.game.addGold(price);
            this.game.ui.showNotification(`Предмет продан за ${price} золота`, 'success');
            return price;
        }
        
        return false;
    }
    
    // Выставить предмет на витрину
    addToShowroom(itemId) {
        if (!this.canSellItem(itemId)) return false;
        
        // Проверить лимит витрины
        if (this.game.forge.showroom.length >= CONFIG.MAX_SHOWROOM_ITEMS) {
            this.game.ui.showNotification('Витрина переполнена!', 'error');
            return false;
        }
        
        this.game.forge.showroom.push(itemId);
        this.game.ui.showNotification('Предмет выставлен на витрину', 'info');
        return true;
    }
    
    // Убрать предмет с витрины
    removeFromShowroom(itemId) {
        const index = this.game.forge.showroom.indexOf(itemId);
        if (index !== -1) {
            this.game.forge.showroom.splice(index, 1);
            return true;
        }
        return false;
    }
}