import {useState} from 'react';

export default function Form(){

    const [name,setName] =useState('');
    const [age,setAge] = useState('');

    const handleInputs = () => {
        const textInput = document.getElementById('textInput').value;
        const numberInput = document.getElementById('numberInput').value;

        setName(textInput);
        setAge(numberInput);

        console.log({textInput, numberInput});

    }

    const handleSubmit = (e) => {
        console.log({name,age});
        e.preventDefault();
    }
    return (
        <form action="">
            <input type="text" onChange= {handleInputs} id="textInput" />
            <input type="number" onChange={handleInputs} id="numberInput" />

            <input type="submit" onClick={handleSubmit} value="Submit Form" />
        </form>
    )

}