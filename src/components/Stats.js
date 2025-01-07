import { useEffect, useState } from "react";

export default function Stats({ items }) {
    // const [totalPacked, setPacked] = useState(
    //     items.filter((item) => item.packed).length
    // );
    // const [percentPacked, setPercentPacked] = useState(
    //     Math.floor((totalPacked / items.length) * 100)
    // );

    // useEffect(() => {
    //     const packedCount = items.filter((item) => item.packed).length;

    //     setPacked(packedCount);
    //     setPercentPacked(Math.floor((packedCount / items.length) * 100));
    // }, [items]);
    const totalPacked = items.filter( item => item.packed ).length;
    const percentPacked = Math.floor( totalPacked / items.length * 100)

    return (
        <footer className="stats">
            <em>
                You have {items.length} items on your list, and you already
                packed { totalPacked} ({ percentPacked }%)
            </em>
        </footer>
    );
}
