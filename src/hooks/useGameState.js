import { useState } from "react";

// 1. Définition des stats de base du personnage
const defaultBaseStats = {
  health: 100,
  strength: 0,
  dexterity: 0,
  intelligence: 0,
  physResist: 0,
  magicResist: 0,
  physDamage: 0,
  magicDamage: 0,
  hitChance: 0
};

const defaultEquip = {
  head: null,
  chest: null,
  legs: null,
  hands: null,
  feet: null,
  weaponLeft: null,
  weaponRight: null
};

export default function useGameState() {
  const [inventory, setInventory] = useState([]);
  const [equipment, setEquipment] = useState({ ...defaultEquip });

  // Ajoute un item (avec empilement si même id)
  const addItem = (item) => {
    setInventory((inv) => {
      const idxSame = inv.findIndex((i) => i.id === item.id);
      if (idxSame !== -1) {
        const newInv = [...inv];
        newInv[idxSame] = {
          ...newInv[idxSame],
          qty: (newInv[idxSame].qty || 1) + 1
        };
        return newInv;
      }
      return [...inv, { ...item, qty: 1 }];
    });
  };

  // Équipe un item depuis l'inventaire, en retirant 1 de la pile ou supprimant l'entrée
  const equipItem = (index, targetSlotKey) => {
    setInventory((inv) => {
      if (index < 0 || index >= inv.length) return inv;
      const itemAtIndex = inv[index];
      const newInv = [...inv];
      const newEquipment = { ...equipment };

      // Si un objet est déjà équipé dans ce slot, on le remet dans l'inventaire (empilage possible)
      const currentlyEquipped = newEquipment[targetSlotKey];
      if (currentlyEquipped) {
        // Tenter d’empiler dans l’inventaire
        const idxSameEquipped = newInv.findIndex((i) => i.id === currentlyEquipped.id);
        if (idxSameEquipped !== -1) {
          newInv[idxSameEquipped] = {
            ...newInv[idxSameEquipped],
            qty: (newInv[idxSameEquipped].qty || 1) + 1
          };
        } else {
          newInv.push({ ...currentlyEquipped, qty: 1 });
        }
      }

      // Retirer une unité du stack à index
      if (itemAtIndex.qty > 1) {
        newInv[index] = { ...itemAtIndex, qty: itemAtIndex.qty - 1 };
      } else {
        newInv.splice(index, 1);
      }

      // Équiper le nouveau
      newEquipment[targetSlotKey] = { ...itemAtIndex, qty: 1 };
      setEquipment(newEquipment);

      return newInv;
    });
  };

  // Déséquipe un objet via son uid : on trouve d’abord dans equipment, puis on l’empile en inventaire
  const unequip = (uid, targetIndex = null) => {
    setEquipment((eq) => {
      // Trouver l’objet dans l’équipement par uid
      const entry = Object.entries(eq).find(
        ([slot, obj]) => obj?.uid === uid
      );
      if (!entry) return eq;
      const [slotKey] = entry;
      const itemToReturn = eq[slotKey];
      const newEquip = { ...eq, [slotKey]: null };

      // On remet dans l’inventaire en empilant si besoin
      setInventory((inv) => {
        // Si on veut insérer à une position précise
        const newInv = [...inv];
        const existingStackIdx = newInv.findIndex((i) => i.id === itemToReturn.id);

        if (existingStackIdx !== -1) {
          // Empiler dans la pile existante
          newInv[existingStackIdx] = {
            ...newInv[existingStackIdx],
            qty: (newInv[existingStackIdx].qty || 1) + 1
          };
        } else {
          // Insérer à targetIndex si précisé, sinon à la fin
          const newItem = { ...itemToReturn, qty: 1 };
          if (targetIndex !== null && targetIndex <= newInv.length) {
            newInv.splice(targetIndex, 0, newItem);
          } else {
            newInv.push(newItem);
          }
        }

        return newInv;
      });

      return newEquip;
    });
  };

  const getPlayerStats = () => {
    // Commencer avec une copie des stats de base
    const finalStats = { ...defaultBaseStats };

    // Parcourir chaque slot d’équipement
    Object.values(equipment).forEach((eqItem) => {
      if (!eqItem) return;
      // Pour chaque attribut du item, on l’additionne
      Object.entries(eqItem.stats).forEach(([statKey, statValue]) => {
        // Si cette stat n’existe pas déjà, l’init à 0
        if (finalStats[statKey] == null) finalStats[statKey] = 0;
        finalStats[statKey] += statValue;
      });
    });

    return finalStats;
  };

  const getEquipped = () => ({ ...equipment });

  return {
    inventory,
    equipment,
    addItem,
    equipItem,
    unequip,
    getEquipped,
    getPlayerStats
  };
}
