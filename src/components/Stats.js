export default function Stats({ items }) {
    const totalPacked = items.filter( item => item.packed ).length;
    const percentage = Math.floor( totalPacked / items.length * 100)
    
    if (items.length === 0) return <footer className="stats">
            <em>Start adding some items to your travel;</em>
        </footer>
        
    return (
        <footer className="stats">
            { percentage == 100 ? "You got evertything!" : 
            <em>
                You have {items.length} items on your list, and you already
                packed { totalPacked} ({ percentage }%)
            </em>
             }
        </footer>
    );
}
