import React from 'react';
import useGameState from './hooks/useGameState';
import Inventory from './components/Inventory';
import Equipment from './components/Equipment';
import { randomItem } from './data/items';

export default function App() {
  const gs = useGameState();

  return (
    <div className="container">
      <h1>Idle Game Inventory Demo</h1>

      <div className="buttons">
        <button onClick={() => gs.addItem(randomItem())}>Add random item</button>
      </div>

      <div className="panels">
        <Inventory state={gs} />
        <Equipment state={gs} />
      </div>

      <h3>Current equipped JSON</h3>
      <pre>{JSON.stringify(gs.getEquipped(), null, 2)}</pre>
    </div>
  );
}
