// src/js/data/resources.js
const RESOURCES = {
    iron_ore: {
        id: "iron_ore",
        name: "Железная руда",
        type: "ore",
        tier: 1,
        basePrice: 5,
        description: "Обычная железная руда. Основной материал для ковки.",
        icon: "fas fa-mountain"
    },
    coal: {
        id: "coal",
        name: "Уголь",
        type: "fuel",
        tier: 1,
        basePrice: 2,
        description: "Топливо для горна.",
        icon: "fas fa-coal"
    },
    wood: {
        id: "wood",
        name: "Древесина",
        type: "wood",
        tier: 1,
        basePrice: 3,
        description: "Древесина для рукоятей и древков.",
        icon: "fas fa-tree"
    },
    leather: {
        id: "leather",
        name: "Кожа",
        type: "leather",
        tier: 1,
        basePrice: 8,
        description: "Выделанная кожа для рукоятей и креплений.",
        icon: "fas fa-paw"
    },
    steel: {
        id: "steel",
        name: "Сталь",
        type: "metal",
        tier: 2,
        basePrice: 15,
        description: "Прочная сталь для качественного оружия.",
        icon: "fas fa-weight-hanging"
    },
    fire_essence: {
        id: "fire_essence",
        name: "Огненная эссенция",
        type: "magic",
        tier: 3,
        basePrice: 50,
        description: "Магическая субстанция, содержащая силу огня.",
        icon: "fas fa-fire"
    }
};