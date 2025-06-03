let idCounter = 0;

const sample = [
  // === Melee Set ===
  {
    id: "iron_sword",
    name: "Iron Sword",
    slot: "weaponLeft",
    icon: "🗡️",
    stats: { physDamage: 15, hitChance: 7, strength: 5 },
  },
  {
    id: "iron_shield",
    name: "Iron Shield",
    slot: "weaponRight",
    icon: "🛡️",
    stats: { physResist: 8, magicResist: 3, strength: 2 },
  },
  {
    id: "iron_helmet",
    name: "Iron Helmet",
    slot: "head",
    icon: "🪖",
    stats: { physResist: 5, health: 10 },
  },
  {
    id: "iron_chestplate",
    name: "Iron Chestplate",
    slot: "chest",
    icon: "👕",
    stats: { physResist: 10, health: 25, strength: 2 },
  },
  {
    id: "iron_greaves",
    name: "Iron Greaves",
    slot: "legs",
    icon: "🦿",
    stats: { physResist: 7, strength: 1 },
  },
  {
    id: "iron_boots",
    name: "Iron Boots",
    slot: "feet",
    icon: "🥾",
    stats: { physResist: 3, hitChance: 2 },
  },
  {
    id: "iron_gauntlets",
    name: "Iron Gauntlets",
    slot: "hands",
    icon: "🧤",
    stats: { hitChance: 3, strength: 2 },
  },

  // === Ranged Set ===
  {
    id: "shortbow",
    name: "Shortbow",
    slot: "weaponLeft",
    icon: "🏹",
    stats: { physDamage: 12, hitChance: 10, dexterity: 5 },
  },
  {
    id: "leather_bracer",
    name: "Leather Bracer",
    slot: "weaponRight",
    icon: "🧷",
    stats: { dexterity: 3, hitChance: 2 },
  },
  {
    id: "leather_hood",
    name: "Leather Hood",
    slot: "head",
    icon: "🧢",
    stats: { physResist: 2, dexterity: 1 },
  },
  {
    id: "leather_tunic",
    name: "Leather Tunic",
    slot: "chest",
    icon: "👕",
    stats: { physResist: 4, health: 15, hitChance: 2 },
  },
  {
    id: "leather_pants",
    name: "Leather Pants",
    slot: "legs",
    icon: "🩳",
    stats: { dexterity: 2, hitChance: 2 },
  },
  {
    id: "ranger_boots",
    name: "Ranger Boots",
    slot: "feet",
    icon: "👟",
    stats: { hitChance: 3, physResist: 1 },
  },
  {
    id: "archer_gloves",
    name: "Archer Gloves",
    slot: "hands",
    icon: "🧤",
    stats: { hitChance: 3, dexterity: 2 },
  },

  // === Magic Set ===
  {
    id: "spell_tome",
    name: "Spell Tome",
    slot: "weaponLeft",
    icon: "📖",
    stats: { magicDamage: 18, intelligence: 6, hitChance: 5 },
  },
  {
    id: "focus_orb",
    name: "Focus Orb",
    slot: "weaponRight",
    icon: "🔮",
    stats: { magicResist: 6, intelligence: 3 },
  },
  {
    id: "wizard_hat",
    name: "Wizard Hat",
    slot: "head",
    icon: "🎩",
    stats: { intelligence: 2, magicResist: 2 },
  },
  {
    id: "mystic_robe",
    name: "Mystic Robe",
    slot: "chest",
    icon: "🥻",
    stats: { magicResist: 6, health: 10, intelligence: 4 },
  },
  {
    id: "arcane_pants",
    name: "Arcane Pants",
    slot: "legs",
    icon: "🩳",
    stats: { magicDamage: 2, intelligence: 2 },
  },
  {
    id: "sorcerer_boots",
    name: "Sorcerer Boots",
    slot: "feet",
    icon: "🥿",
    stats: { hitChance: 2, magicResist: 2 },
  },
  {
    id: "mage_gloves",
    name: "Mage Gloves",
    slot: "hands",
    icon: "🧤",
    stats: { intelligence: 2, magicDamage: 1 },
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
