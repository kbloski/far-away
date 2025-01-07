import { useState } from "react";

export default function PackingList({ items, deleteItem, onToggleItems }) {
    const [ sortBy, setSortBy ] = useState('input')

    let sortedItems = [...items] ?? [];

    if (sortBy === 'ipnut') sortedItems = items;

    if (sortBy === 'description') sortedItems = items.slice().sort( (a, b) => {
        return a.description.localeCompare(b.description)
    })
    
    if (sortBy === 'packed') sortedItems = items.slice().sort( (a, b) => {
        return Number(a.packed) - Number(b.packed)
    });

    return (
        <div className="list">
            <ul >
                {sortedItems.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                        deleteItem={deleteItem}
                        toggleItems={onToggleItems}
                    />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value='input'>Sort by input order</option>
                    <option value='description'>Sort by description</option>
                    <option value='packed'>Sort by packed status</option>
                </select>
            </div>
        </div>
    );
}


function Item( {
    id,
    description,
    packed,
    quantity,
    deleteItem,
    toggleItems
}){

    function handleDelete(){
        deleteItem(id)
    }

    function handleCheck(){
        toggleItems( id )
    }

    return <li>
        <input type="checkbox" checked={packed} onChange={handleCheck} />
        <span> { quantity } { description} </span>
        <button onClick={ handleDelete }>❌</button>
    </li>
}