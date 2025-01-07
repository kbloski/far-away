export default function Item( {
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