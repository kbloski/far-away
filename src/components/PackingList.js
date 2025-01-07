// import Item from "./Item";

export default function PackingList({ packageItems, deleteItem, onToggleItems }) {
    return (
        <ul className="list">
            {packageItems.map((item, index) => (
                <Item
                    key={index}
                    {...item}
                    deleteItem={deleteItem}
                    toggleItems={onToggleItems}
                />
            ))}
        </ul>
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