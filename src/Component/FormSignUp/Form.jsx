import Button from 'react-bootstrap/Button';
import {useState, useRef} from 'react';

export default function Form(){

    //useState
    const [inputForm,setInputForm] = useState({country:'CA'});

    //useRef
    const inputNameRef = useRef('');
    const inputCityRef = useRef('');
    const inputAgeRef = useRef('');
    const inputCountryRef = useRef('');
    const inputConditionsRef = useRef('');
    
    console.log(inputNameRef);

    
    const handleForm = (e) => {
        const target = e.target;
        let value = target.value;

        if(target.type === 'checkbox'){
            value = target.checked
        }
        setInputForm({...inputForm , [target.id] : value });

    };
    
    console.log(inputForm);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    }

    return <>
        <form>
            <div className="mb-3 mt-3 w-50 mx-auto">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" onChange={handleForm} name="name" id="name" ref={inputNameRef} className="form-control"/>
            </div>
            <div className="mb-3 w-50 mx-auto">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" onChange={handleForm} name="city" id="city" ref={inputCityRef} className="form-control"/>
            </div>
            <div className="mb-3 w-50 mx-auto">    
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" onChange={handleForm} name="age" id="age" ref={inputAgeRef} className="form-control"/>
            </div>
            <div className="mb-3 w-50 mx-auto">
                <label htmlFor="country" className="form-label">Country</label>
                <select name="country" onChange={handleForm} id="country" ref={inputCountryRef} className="form-select">
                    <option value="CA">Canada</option>
                    <option value="US">United-States</option>
                    <option value="MX">Mexique</option>
                    <option value="CS">Costa Rica</option>
                </select>
            </div>
            <div className="mb-3 w-50 mx-auto">
                <input type="checkbox" onChange={handleForm} ref={inputConditionsRef} name="acceptConditions" id="acceptConditions"  className="me-3" />
                <label htmlFor="acceptConditions" className="form-label">Accept conditions.</label>
            </div>
            <div className="w-50 mx-auto">
                <input type="submit" name="submitForm" onClick={handleSubmit} value="Submit" />
            </div>
        </form>
    </>
}