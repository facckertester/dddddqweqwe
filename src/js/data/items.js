// src/js/data/items.js
const ITEM_TYPES = {
    weapon: {
        name: "Оружие",
        subtypes: ['sword', 'axe', 'mace', 'dagger'],
        baseStats: ['damageMin', 'damageMax', 'attackSpeed', 'durability']
    },
    armor: {
        name: "Доспех",
        subtypes: ['helmet', 'chest', 'gloves', 'boots'],
        baseStats: ['armor', 'weight', 'durability']
    }
};

const MATERIALS = {
    iron: {
        name: "Железо",
        tier: 1,
        statMultipliers: {
            damageMin: 1.0,
            damageMax: 1.0,
            armor: 1.0,
            durability: 1.0
        }
    },
    steel: {
        name: "Сталь",
        tier: 2,
        statMultipliers: {
            damageMin: 1.5,
            damageMax: 1.5,
            armor: 1.3,
            durability: 1.8
        }
    }
};

const QUALITIES = [
    { id: 1, name: "Хлам", multiplier: 0.7, color: "#8B0000" },
    { id: 2, name: "Обычный", multiplier: 1.0, color: "#808080" },
    { id: 3, name: "Хороший", multiplier: 1.2, color: "#228B22" },
    { id: 4, name: "Превосходный", multiplier: 1.5, color: "#4169E1" },
    { id: 5, name: "Шедевр", multiplier: 2.0, color: "#FFD700" }
];

const ENCHANTMENTS = {
    fire: {
        name: "Огненное",
        description: "Наносит дополнительный урон огнем",
        stat: "fireDamage",
        minValue: 5,
        maxValue: 15,
        tier: 1
    },
    frost: {
        name: "Ледяное",
        description: "Замедляет противника",
        stat: "frostSlow",
        minValue: 10,
        maxValue: 30,
        tier: 1
    },
    strength: {
        name: "Силы",
        description: "Увеличивает силу владельца",
        stat: "strength",
        minValue: 1,
        maxValue: 3,
        tier: 2
    }
};