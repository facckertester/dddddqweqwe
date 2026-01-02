// src/js/data/npc.js
const NPC_TYPES = {
    warrior: {
        name: "Воин",
        icon: "fas fa-shield-alt",
        preferences: {
            itemTypes: ['weapon', 'armor'],
            preferredStats: ['damageMax', 'armor'],
            dislikedStats: ['weight']
        }
    },
    mage: {
        name: "Маг",
        icon: "fas fa-hat-wizard",
        preferences: {
            itemTypes: ['weapon'],
            preferredEnchantments: ['fire', 'frost'],
            dislikedStats: ['weight']
        }
    },
    hunter: {
        name: "Охотник",
        icon: "fas fa-bow-arrow",
        preferences: {
            itemTypes: ['weapon'],
            preferredStats: ['attackSpeed', 'damageMax'],
            requiredStats: ['attackSpeed']
        }
    },
    merchant: {
        name: "Купец",
        icon: "fas fa-coins",
        preferences: {
            itemTypes: ['weapon', 'armor'],
            preferredQuality: [3, 4, 5], // Хорошее и лучше
            budgetMultiplier: 1.2
        }
    }
};

const ORDER_TYPES = {
    simple: {
        name: "Простой заказ",
        baseReward: 50,
        timeLimit: null
    },
    urgent: {
        name: "Срочный заказ",
        baseReward: 100,
        timeLimit: 300 // 5 минут в секундах
    },
    auction: {
        name: "Аукцион",
        baseReward: 75,
        bargaining: true
    },
    chain: {
        name: "Цепочка заказов",
        baseReward: 150,
        chainLength: 3
    }
};