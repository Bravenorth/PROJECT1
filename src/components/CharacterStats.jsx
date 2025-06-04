// src/components/CharacterStats.jsx
import React from "react";

export default function CharacterStats({ getPlayerStats }) {
  const stats = getPlayerStats();

  return (
    <div className="character-stats">
      <h2>Character Statistics</h2>
      <ul className="stats-list">
        {Object.entries(stats).map(([key, value]) => (
          <li key={key} className="stats-item">
            <span className="stat-key">{formatKey(key)}:</span>
            <span className="stat-value">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function formatKey(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
}
