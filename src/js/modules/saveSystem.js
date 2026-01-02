// src/js/modules/saveSystem.js
class SaveSystem {
    constructor() {
        this.SAVE_KEY = 'forge_of_fate_save';
        this.CURRENT_VERSION = '1.0';
    }
    
    saveGame(state) {
        try {
            const saveData = {
                version: this.CURRENT_VERSION,
                timestamp: Date.now(),
                data: state
            };
            
            localStorage.setItem(this.SAVE_KEY, JSON.stringify(saveData));
            return true;
        } catch (error) {
            console.error('Ошибка при сохранении:', error);
            return false;
        }
    }
    
    loadGame() {
        try {
            const saveJson = localStorage.getItem(this.SAVE_KEY);
            if (!saveJson) return null;
            
            const saveData = JSON.parse(saveJson);
            return saveData.data;
        } catch (error) {
            console.error('Ошибка при загрузке:', error);
            return null;
        }
    }
    
    validateSave(saveData) {
        if (!saveData || !saveData.version) return false;
        
        // Проверка версии
        if (saveData.version !== this.CURRENT_VERSION) {
            console.warn(`Несовместимая версия сохранения: ${saveData.version}, ожидается: ${this.CURRENT_VERSION}`);
            return false;
        }
        
        // Базовые проверки структуры
        const requiredFields = ['player', 'inventory', 'forge', 'gameState'];
        for (const field of requiredFields) {
            if (!saveData[field]) {
                console.error(`Отсутствует обязательное поле: ${field}`);
                return false;
            }
        }
        
        return true;
    }
    
    deleteSave() {
        try {
            localStorage.removeItem(this.SAVE_KEY);
            return true;
        } catch (error) {
            console.error('Ошибка при удалении сохранения:', error);
            return false;
        }
    }
    
    exportSave() {
        const saveData = localStorage.getItem(this.SAVE_KEY);
        if (!saveData) return null;
        
        const blob = new Blob([saveData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        return url;
    }
    
    importSave(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (event) => {
                try {
                    const saveData = JSON.parse(event.target.result);
                    
                    if (this.validateSave(saveData.data)) {
                        localStorage.setItem(this.SAVE_KEY, JSON.stringify(saveData));
                        resolve(true);
                    } else {
                        reject(new Error('Невалидный файл сохранения'));
                    }
                } catch (error) {
                    reject(error);
                }
            };
            
            reader.onerror = () => reject(new Error('Ошибка чтения файла'));
            reader.readAsText(file);
        });
    }
}