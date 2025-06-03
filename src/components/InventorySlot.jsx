import React from "react";
import { useDrop } from "react-dnd";
import DraggableItem from "./DraggableItem";

export default function InventorySlot({ index, state }) {
  const item = state.inventory[index];
  const [, drop] = useDrop({
    accept: "ITEM",
    drop: (dragged) => {
      const { index: draggedIndex, from, uid } = dragged;
      if (from === "equipment") {
        // Déséquipe dans la pile existante si besoin, ou à cet index
        state.unequip(uid, index);
      }
    }
  });

  return (
    <div
      ref={drop}
      className="slot"
      title={item?.name || "Empty"}
      style={{ position: "relative" }}
    >
      {item && (
        <>
          <DraggableItem
            item={item}
            from="inventory"
            index={index}
            slotKey={null}
            uid={item.uid}
          />
          {item.qty > 1 && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 2,
                fontSize: "0.7rem",
                color: "#0f0",
                background: "#000c",
                padding: "0 3px",
                borderRadius: "3px"
              }}
            >
              ×{item.qty}
            </div>
          )}
        </>
      )}
    </div>
  );
}
