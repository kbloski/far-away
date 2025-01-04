import Logo from './components/Logo';
import Form from './components/Form';
import Stats from './components/Stats';
import PackingList from './components/PackingList';
import { useState } from 'react';

export default function App() { 
  const [items, setItems] =  useState(
      [
        { id: 1, description: "Pants", packed: false, quantity: 3 },
        { id: 2, description: "tt", packed: false, quantity: 2 },
      ]
    )

    function addItemToList( item ){
      setItems([...items, item])
    }
  
  return (
      <div className="app">
          <Logo />
          <Form addItem={addItemToList} />
          <PackingList packageItems={items} />
          <Stats />
      </div>
  );
}