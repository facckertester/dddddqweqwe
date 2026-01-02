// src/js/data/blueprints.js
const BLUEPRINTS = {
    iron_sword: {
        id: "iron_sword",
        name: "Железный меч",
        type: "weapon",
        subtype: "sword",
        requiredLevel: 1,
        materials: [
            { resourceId: "iron_ore", amount: 3 },
            { resourceId: "coal", amount: 2 },
            { resourceId: "wood", amount: 1 }
        ],
        timeToCraft: 30, // секунды
        unlockCost: 0,
        baseStats: {
            damageMin: { base: 5, variance: 2 },
            damageMax: { base: 10, variance: 3 },
            attackSpeed: { base: 1.0, variance: 0.1 },
            durability: { base: 50, variance: 10 }
        },
        description: "Простой железный меч. Надежное оружие для начинающих воинов."
    },
    iron_chest: {
        id: "iron_chest",
        name: "Железный нагрудник",
        type: "armor",
        subtype: "chest",
        requiredLevel: 1,
        materials: [
            { resourceId: "iron_ore", amount: 5 },
            { resourceId: "coal", amount: 3 },
            { resourceId: "leather", amount: 2 }
        ],
        timeToCraft: 45,
        unlockCost: 0,
        baseStats: {
            armor: { base: 15, variance: 3 },
            weight: { base: 10, variance: 2 },
            durability: { base: 60, variance: 15 }
        },
        description: "Тяжелый, но надежный железный нагрудник."
    },
    steel_sword: {
        id: "steel_sword",
        name: "Стальной меч",
        type: "weapon",
        subtype: "sword",
        requiredLevel: 3,
        materials: [
            { resourceId: "steel", amount: 2 },
            { resourceId: "coal", amount: 3 },
            { resourceId: "wood", amount: 1 },
            { resourceId: "leather", amount: 1 }
        ],
        timeToCraft: 60,
        unlockCost: 100,
        baseStats: {
            damageMin: { base: 8, variance: 3 },
            damageMax: { base: 15, variance: 4 },
            attackSpeed: { base: 1.1, variance: 0.1 },
            durability: { base: 80, variance: 15 }
        },
        description: "Качественный стальной меч. Любимое оружие многих воинов."
    }
};