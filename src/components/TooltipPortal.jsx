import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function TooltipPortal({ item, position }) {
  const [tooltipElement, setTooltipElement] = useState(null);

  useEffect(() => {
    const tooltipDiv = document.createElement("div");
    document.body.appendChild(tooltipDiv);
    setTooltipElement(tooltipDiv);
    return () => document.body.removeChild(tooltipDiv);
  }, []);

  if (!tooltipElement || !item) return null;

  return createPortal(
    <div
      className="tooltip"
      style={{
        top: position.y + 12,
        left: position.x + 12,
        position: "absolute"
      }}
    >
      <strong>{item.name}</strong>
      <ul>
        {Object.entries(item.stats).map(([key, val]) => (
          <li key={key} style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="stat-key">{formatKey(key)}</span>
            <span className="stat-value">{val > 0 ? "+" : ""}{val}</span>
          </li>
        ))}
      </ul>
    </div>,
    tooltipElement
  );
}

function formatKey(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
}
