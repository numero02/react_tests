import Button from 'react-bootstrap/Button';
import {useState} from 'react';

export default function Search(){
    
    const [searchInput,setSearchInput] = useState('');
    
    const handleInputSearch = (e) => {
        console.log(e.target.value);
        setSearchInput(e.target.value);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return <>
        <form action="">
            <label for="searchField">Search:</label>
            <input type="text" name="searchField" onChange={handleInputSearch} placeholder="Enter a product" id="searchField" />
            <input type="submit" onClick={handleSubmit} value="Search" />
        </form>
        </>
}