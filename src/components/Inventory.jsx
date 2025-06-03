import React from "react";
import InventorySlot from "./InventorySlot";

export default function Inventory({ state }) {
  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <div className="grid">
        {state.inventory.map((_, idx) => (
          <InventorySlot key={idx} index={idx} state={state} />
        ))}
      </div>
    </div>
  );
}
