
import {useState,useEffect} from 'react';
import { Button,ButtonGroup, ButtonToolbar  } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import DataItems from './DataItems';


export default function ListItems(){

    const [products,setProducts] = useState([]);
    const [searchInput,setSearchInput] = useState('');
    const [displayProducts, setDisplayProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        const url = "https://fakestoreapi.com/products";
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data);
        });

    },[]);

    useEffect(() => {
        
        fetch('https://fakestoreapi.com/products/categories')
        .then( response => response.json())
        .then(response => {
            setCategories(response)
        });
    }, []);

    const handleCategorieButton = (e) => {
        setDisplayProducts(products.filter((product) => {
            return product.category.toLowerCase() == e.currentTarget.innerHTML.toLowerCase();
        }));
    }
    const displayCategories = (categories.length > 0 ) ? categories.map((category,keyCategorie) => {
        return <Button className="w-25 p-2" variant="secondary" size="lg" onClick={handleCategorieButton} key={keyCategorie}>{category}</Button>;
    }): '';

    const handleInputSearch = (e) => {
        setSearchInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const searchFilter = products.filter((product) => {

                return  product.title.toLowerCase().includes(searchInput.toLowerCase()) 
                            || product.description.toLowerCase().includes(searchInput.toLowerCase()) 
                                || product.category.toLowerCase().includes(searchInput.toLowerCase());
        }); 
        
        setDisplayProducts( (searchFilter.length > 0) ? searchFilter : [] );
    }

  

    return <>

        <h1 className="display-1">Products :</h1>
        <form action="" id="formSearch" className='container'>
            <label className='ms-3' for="searchField">Search:</label>
            <input className='ms-3 me-3' type="text" name="searchField" onChange={handleInputSearch} placeholder="Enter a product" id="searchField" />
            <Button className='ms-3' type="submit" onClick={handleSubmit} className="btn btn-primary">Search</Button>
        </form>

        <ButtonToolbar aria-label="Toolbar with Button groups">
            <ButtonGroup className="w-100 p-3" aria-label="First group" >
                {displayCategories}
            </ButtonGroup>
        </ButtonToolbar>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>image</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>

                {<DataItems items={displayProducts} />}
                
            </tbody>
        </Table>

    </>;
}