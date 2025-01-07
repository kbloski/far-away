import Logo from './components/Logo';
import Form from './components/Form';
import Stats from './components/Stats';
import PackingList from './components/PackingList';
import { useState } from 'react';

export default function App() { 
  const [items, setItems] =  useState(
      [
        { id: 1, description: "Pants", packed: false, quantity: 3 },
        { id: 2, description: "tt", packed: true, quantity: 2 },
      ]
    )


    function handleToggleItem( id ){
      setItems( items => items.map( item => item.id === id ? { ...item, packed: !item.packed} : item))
    }

    function addItemToList( item ){
      setItems( items => [...items, item])
    }
  
    function deleteItemFromList(id){
      setItems( items => items.filter( i => i.id !== id))
    }

  return (
      <div className="app">
          <Logo />
          <Form addItem={addItemToList} />
          <PackingList packageItems={items} deleteItem={deleteItemFromList}  onToggleItems={handleToggleItem}/>
          <Stats items={items}/>
      </div>
  );
}