import React from "react";
import EquipSlot from "./EquipSlot";

export default function Equipment({ state }) {
  const slots = {
    head: state.equipment.head,
    chest: state.equipment.chest,
    hands: state.equipment.hands,
    legs: state.equipment.legs,
    feet: state.equipment.feet,
    weaponLeft: state.equipment.weaponLeft,
    weaponRight: state.equipment.weaponRight,
  };

  return (
    <div className="equipment">
      <h2>Equipment</h2>
      <div className="equip-grid">
        <EquipSlot
          slotKey="head"
          item={slots.head}
          state={state}
          style={{ gridArea: "head" }}
        />
        <EquipSlot
          slotKey="chest"
          item={slots.chest}
          state={state}
          style={{ gridArea: "chest" }}
        />
        <EquipSlot
          slotKey="hands"
          item={slots.hands}
          state={state}
          style={{ gridArea: "hands" }}
        />
        <EquipSlot
          slotKey="legs"
          item={slots.legs}
          state={state}
          style={{ gridArea: "legs" }}
        />
        <EquipSlot
          slotKey="feet"
          item={slots.feet}
          state={state}
          style={{ gridArea: "feet" }}
        />
        <EquipSlot
          slotKey="weaponLeft"
          item={slots.weaponLeft}
          state={state}
          style={{ gridArea: "weaponLeft" }}
        />
        <EquipSlot
          slotKey="weaponRight"
          item={slots.weaponRight}
          state={state}
          style={{ gridArea: "weaponRight" }}
        />
      </div>
      <small>Drag & drop to equip/unequip</small>
    </div>
  );
}
