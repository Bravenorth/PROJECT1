let idCounter = 0;

const sample = [
  // === Melee Set ===
  {
    id: "iron_sword",
    name: "Iron Sword",
    slot: "weaponLeft",
    icon: "iron_sword.png",
    stats: { physDamage: 15, hitChance: 7, strength: 5 },
  },
  {
    id: "iron_shield",
    name: "Iron Shield",
    slot: "weaponRight",
    icon: "iron_shield.png",
    stats: { physResist: 8, magicResist: 3, strength: 2 },
  },
  {
    id: "iron_helmet",
    name: "Iron Helmet",
    slot: "head",
    icon: "iron_helmet.png",
    stats: { physResist: 5, health: 10 },
  },
  {
    id: "iron_chestplate",
    name: "Iron Chestplate",
    slot: "chest",
    icon: "iron_chestplate.png",
    stats: { physResist: 10, health: 25, strength: 2 },
  },
  {
    id: "iron_boots",
    name: "Iron Boots",
    slot: "feet",
    icon: "iron_boots.png",
    stats: { physResist: 3, hitChance: 2 },
  },
];

// Fonction pour cloner et ajouter un uid
function generateItem(base) {
  return {
    ...base,
    uid: `item_${idCounter++}`,
    qty: 1,
  };
}

export const randomItem = () => generateItem(sample[Math.floor(Math.random() * sample.length)]);

export default sample;
