import React from "react";
import InventorySlot from "./InventorySlot";

const DEFAULT_SLOTS = 20; // Nombre de cases vides à afficher par défaut

export default function Inventory({ state }) {
  // On prend le plus grand entre DEFAULT_SLOTS et le nombre d'items réellement en inventaire
  const totalSlots = Math.max(DEFAULT_SLOTS, state.inventory.length);

  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <div className="grid">
        {/*
          On génère un tableau [0, 1, 2, ..., totalSlots-1]
          : si idx < state.inventory.length => on passe index à InventorySlot (affiche item)
          : sinon, on passe index à InventorySlot pour qu’il affiche “vide”
        */}
        {Array.from({ length: totalSlots }, (_, idx) => (
          <InventorySlot
            key={idx}
            index={idx}
            state={state}
            isEmptySlot={idx >= state.inventory.length}
          />
        ))}
      </div>
    </div>
  );
}
