// import Item from "./Item";

export default function PackingList({ packageItems, deleteItem }) {
    return (
        <ul className="list">
            {packageItems.map((item, index) => (
                <Item key={index} {...item} deleteItem={deleteItem} />
            ))}
        </ul>
    );
}


function Item( {
    id,
    description,
    packed,
    quantity,
    deleteItem
}){

    function handleDelete(){
        deleteItem(id)
    }

    return <li>
        <input type="checkbox"></input>
        <span> { quantity } { description} </span>
        <button onClick={ handleDelete }>❌</button>
    </li>
}