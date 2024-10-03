import {useState} from 'react';

export default function ListFruits({listItems}){

    const [fruit, setFruit] = useState('');
    const [listFruits,setListFruits] = useState(listItems);
    
    const displayFruits = listFruits.map( ( fruit , fruitKey ) => {
            return <li key={fruitKey}> {fruit} </li> 
        });

    const handleInput = (event) => {
        setFruit(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setListFruits([...listFruits,fruit]);
        setFruit('');
    }

    return (
        <>
            <form action="">
                <input type="text" onChange={handleInput} value={fruit} id="addFruit" />
                <input type="submit" onClick={handleSubmit} value="Submit" />
            </form>

            <h1>Fruits :</h1>
            <ul>
                {displayFruits}
            </ul>
        </>
    )
}