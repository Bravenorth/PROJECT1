import React, { useState } from "react";
import { useDrag } from "react-dnd";
import TooltipPortal from "./TooltipPortal";

export default function DraggableItem({ item, from, index, slotKey }) {
  const [hoverPos, setHoverPos] = useState(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: () => {
      const payload = {
        uid: item.uid,
        index,               // c'est l'index dans inventory ou null si depuis équipement
        from,
        slotKey: slotKey || item.slot
      };
      console.log(
        "📦 Drag START",
        item.name,
        `(uid: ${item.uid}, index: ${index}, from: ${from})`
      );
      return payload;
    },
    end: (draggedPayload, monitor) => {
      const didDrop = monitor.didDrop();
      console.log(
        `📦 Drag END → ${didDrop ? "Dropped" : "Cancelled"}`,
        draggedPayload.uid,
        `(index: ${draggedPayload.index})`
      );
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  const handleMouseMove = (e) => {
    setHoverPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      ref={drag}
      className="drag-item"
      onMouseEnter={handleMouseMove}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverPos(null)}
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}
    >
      {item.icon || item.name[0]}
      {hoverPos && !isDragging && (
        <TooltipPortal item={item} position={hoverPos} />
      )}
    </div>
  );
}
