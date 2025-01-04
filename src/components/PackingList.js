import Item from "./Item";

export default function PackingList( { packageItems} ) {
    return <ul className="list">
        {packageItems.map( (item, index) => <Item key={index} {...item}  />)}
    </ul>;
}
