import Item from "./Item";

export default function PackingList({ packageItems, deleteItem }) {
    return (
        <ul className="list">
            {packageItems.map((item, index) => (
                <Item key={index} {...item} deleteItem={deleteItem} />
            ))}
        </ul>
    );
}
