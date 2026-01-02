// src/js/modules/progression.js
class ProgressionModule {
    constructor(game) {
        this.game = game;
    }
    
    // Добавить опыт
    addExp(amount, skillType = null) {
        // Опыт игрока
        this.game.player.exp += amount;
        
        // Проверить повышение уровня игрока
        while (this.game.player.exp >= this.game.player.expToNextLevel) {
            this.levelUp();
        }
        
        // Опыт навыка, если указан
        if (skillType && this.game.player.skills[skillType]) {
            const skill = this.game.player.skills[skillType];
            skill.exp += amount;
            
            while (skill.exp >= skill.expToNextLevel) {
                this.skillLevelUp(skillType);
            }
        }
        
        this.game.updateUI();
    }
    
    // Повышение уровня игрока
    levelUp() {
        this.game.player.level += 1;
        this.game.player.exp -= this.game.player.expToNextLevel;
        this.game.player.expToNextLevel = this.calculateExpForNextLevel(this.game.player.level);
        
        this.game.ui.showNotification(`Уровень повышен! Теперь вы уровня ${this.game.player.level}`, 'success');
        
        // Награда за уровень
        this.game.addGold(this.game.player.level * 50);
    }
    
    // Повышение уровня навыка
    skillLevelUp(skillType) {
        const skill = this.game.player.skills[skillType];
        skill.level += 1;
        skill.exp -= skill.expToNextLevel;
        skill.expToNextLevel = this.calculateSkillExpForNextLevel(skill.level);
        
        const skillNames = {
            weaponsmith: 'Оружейник',
            armorsmith: 'Доспешник',
            enchanter: 'Зачарователь',
            merchant: 'Торговец'
        };
        
        this.game.ui.showNotification(
            `Навык "${skillNames[skillType]}" повышен до уровня ${skill.level}!`,
            'success'
        );
    }
    
    // Формула опыта для следующего уровня
    calculateExpForNextLevel(currentLevel) {
        return Math.round(100 * Math.pow(1.5, currentLevel - 1));
    }
    
    // Формула опыта для следующего уровня навыка
    calculateSkillExpForNextLevel(currentLevel) {
        return Math.round(50 * Math.pow(1.3, currentLevel - 1));
    }
    
    // Расчет бонуса от навыка
    getSkillBonus(skillType, baseValue) {
        const skill = this.game.player.skills[skillType];
        if (!skill) return baseValue;
        
        switch(skillType) {
            case 'weaponsmith':
                return baseValue * (1 + skill.level * 0.05); // +5% за уровень
            case 'armorsmith':
                return baseValue * (1 + skill.level * 0.04); // +4% за уровень
            case 'merchant':
                return baseValue * (1 + skill.level * 0.03); // +3% за уровень к ценам
            default:
                return baseValue;
        }
    }
}