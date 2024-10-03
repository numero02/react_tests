import {useEffect,useState} from 'react';
import Button from 'react-bootstrap/Button';

export default function Increment(){

    const [count,setCount] = useState(0);
    // useEffect(() => {
    
    //     console.log('use Effect []');
    
    // },[])

    // useEffect(() => {

    //     console.log('use Effect no parameter !!!');

    // });

    useEffect(() => {

        console.log('useEffect Count')
        return () => {
            console.log('return willUnmount');
        }
    },[count]);

    return (
        <>
            <span>{count}</span>
            <Button variant="primary" onClick={() => { setCount(count + 1)}}>Increment</Button>
            <Button variant="danger" onClick={() => { setCount(count - 1)}} >Decrement</Button>
            <Button variant="success" onClick={() => { setCount(0)}}>Reset</Button>
        </>
        
    )
}