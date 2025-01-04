export default function Item( {
    id,
    description,
    packed,
    quantity
}){

    return <li>
        <input type="checkbox"></input>
        <span> { quantity } { description} </span>
        <button>❌</button>
    </li>
}