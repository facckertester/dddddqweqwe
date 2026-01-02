// src/js/data/initialData.js
const INITIAL_STATE = {
    version: "1.0",
    player: {
        level: 1,
        exp: 0,
        expToNextLevel: 100,
        gold: 100,
        skills: {
            weaponsmith: { level: 1, exp: 0, expToNextLevel: 50 },
            armorsmith: { level: 1, exp: 0, expToNextLevel: 50 },
            enchanter: { level: 1, exp: 0, expToNextLevel: 50 },
            merchant: { level: 1, exp: 0, expToNextLevel: 50 }
        },
        reputation: {
            magesGuild: 0,
            royalGuard: 0,
            adventurersGuild: 0
        }
    },
    
    inventory: {
        resources: {
            iron_ore: 20,
            coal: 30,
            wood: 15,
            leather: 10,
            steel: 5,
            fire_essence: 2
        },
        items: [],
        blueprints: ["iron_sword", "iron_chest"]
    },
    
    forge: {
        level: 1,
        upgrades: {
            furnace: 0,
            anvil: 0,
            showcase: 0,
            storage: 0
        },
        activeCrafts: [],
        showroom: []
    },
    
    gameState: {
        currentDay: 1,
        orders: [],
        marketPrices: {}
    }
};

// Конфигурация баланса
const CONFIG = {
    QUALITY_MULTIPLIERS: [0.7, 1.0, 1.2, 1.5, 2.0],
    BASE_ENCHANT_CHANCE: 0.01,
    MAX_SHOWROOM_ITEMS: 10,
    BASE_STORAGE_CAPACITY: 100,
    CRAFT_EXP_MULTIPLIER: 10
};