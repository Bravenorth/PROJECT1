import React from "react";

export default function Tooltip({ item }) {
  if (!item) return null;

  const { name, stats } = item;

  return (
    <div className="tooltip">
      <strong>{name}</strong>
      <ul>
        {Object.entries(stats).map(([key, value]) => (
          <li key={key} style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="stat-key">{formatKey(key)}</span>
            <span className="stat-value">
              {value > 0 ? "+" : ""}
              {value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function formatKey(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
}
