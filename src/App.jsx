// src/App.jsx
import React from "react";
import useGameState from "./hooks/useGameState";
import Inventory from "./components/Inventory";
import Equipment from "./components/Equipment";
import CharacterStats from "./components/CharacterStats";
import { randomItem } from "./data/items";

export default function App() {
  const gameState = useGameState();
  const {
    inventory,
    equipment,
    addItem,
    equipItem,
    unequip,
    getPlayerStats
  } = gameState;

  return (
    <div className="container">
      {/* En-tête de l’application */}
      <header>
        <h1>Test</h1>
        <button onClick={() => addItem(randomItem())}>
          Add Random Item
        </button>
      </header>

      {/* Section principale affichant Inventaire et Equipement côte à côte */}
      <main className="panels">
        <section className="inventory-panel">
          <Inventory state={gameState} />
        </section>

        <section className="equipment-panel">
          <Equipment state={gameState} />
        </section>
      </main>

      {/* Statistiques du personnage (agrégées depuis l’équipement) */}
      <section className="stats-panel">
        <CharacterStats getPlayerStats={getPlayerStats} />
      </section>

      {/* Affichage JSON de l’équipement actuel pour debug */}
{/*       <section className="debug-panel">
        <h3>Current Equipped (JSON)</h3>
        <pre>{JSON.stringify(equipment, null, 2)}</pre>
      </section> */}
    </div>
  );
}
