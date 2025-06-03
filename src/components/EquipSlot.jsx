import React from "react";
import { useDrop } from "react-dnd";
import DraggableItem from "./DraggableItem";

export default function EquipSlot({ slotKey, item, state, style }) {
  const [, drop] = useDrop({
    accept: "ITEM",
    drop: (dragged) => {
      const { index, from, slotKey: draggedSlotKey, uid } = dragged;
      // On récupère l'objet par index
      const draggedItem = state.inventory[index];

      if (!draggedItem) {
        console.log(
          "⚠️ Item introuvable dans l’inventaire (pile épuisée ?)",
          uid
        );
        return;
      }

      const isWeapon = slotKey.startsWith("weapon");
      const draggedSlot = draggedItem.slot || draggedSlotKey;

      console.log(
        `🎯 Dropped ${draggedItem.name} (uid: ${uid}, index: ${index}) on ${slotKey}`
      );

      if (
        from === "inventory" &&
        (draggedSlot === slotKey ||
          (isWeapon && draggedSlot.startsWith("weapon")))
      ) {
        state.equipItem(index, slotKey);
      } else {
        console.log("❌ Invalid drop (slot mismatch)", {
          draggedSlot,
          expected: slotKey
        });
      }
    }
  });

  return (
    <div
      ref={drop}
      className="slot"
      style={style}
      title={item?.name || slotKey}
    >
      {item ? (
        <DraggableItem item={item} from="equipment" index={null} slotKey={slotKey} uid={item.uid} />
      ) : (
        slotKey[0].toUpperCase()
      )}
    </div>
  );
}
