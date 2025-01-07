export default function Stats(
    {
        totalItems,
        packedItems
    }
){
    

    return <footer className="stats">
        <em>
            You have x items on your list, and you aleady packed X (XX%)
        </em>
    </footer>
}