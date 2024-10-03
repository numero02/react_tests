export default function Age({colors}) {
    
    const age = 13;

    const displayColors = colors.map(color => <li> {color} </li> );

    console.log(displayColors);
    
    return (
        <>
            <ul>
                {displayColors}
            </ul>
        </>
    )
}