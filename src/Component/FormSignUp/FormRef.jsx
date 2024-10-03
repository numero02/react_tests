import {useState, useRef} from 'react';

export default function FormRef(){

    const [inputValues,setValues] = useState({});
    const inputNameRef = useRef('');
    const inputCityRef = useRef('');
    const inputAgeRef = useRef('');
    const inputCountryRef = useRef('');
    const inputConditionsRef = useRef('');
    console.log(
        inputNameRef.current.value,
        inputCityRef.current.value,
        inputAgeRef.current.value,
        inputCountryRef.current.value,
        inputConditionsRef.current.value,
    );


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('ref : ',
            inputNameRef.current.value,
            inputCityRef.current.value,
            inputAgeRef.current.value,
            inputCountryRef.current.value,
            inputConditionsRef.current.value,
        );

        setValues({
            name: inputNameRef.current.value,
            city: inputCityRef.current.value,
            age: inputAgeRef.current.value,
            country: inputCountryRef.current.value,
            acceptConditions: inputConditionsRef.current.value
        });
    }

    return <>
        {inputValues.name }
        {inputValues.city } 
        {inputValues.age}
        {inputValues.country} 
        {inputValues.acceptConditions}
        <h1 className="text-center mt-3">Use Reference</h1>
        <form>
            <div className="mb-3 mt-3 w-50 mx-auto">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" id="name" ref={inputNameRef} className="form-control"/>
            </div>
            <div className="mb-3 w-50 mx-auto">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" name="city" id="city" ref={inputCityRef} className="form-control"/>
            </div>
            <div className="mb-3 w-50 mx-auto">    
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" name="age" id="age" ref={inputAgeRef} className="form-control"/>
            </div>
            <div className="mb-3 w-50 mx-auto">
                <label htmlFor="country" className="form-label">Country</label>
                <select name="country" id="country" ref={inputCountryRef} className="form-select">
                    <option value="CA">Canada</option>
                    <option value="US">United-States</option>
                    <option value="MX">Mexique</option>
                    <option value="CS">Costa Rica</option>
                </select>
            </div>
            <div className="mb-3 w-50 mx-auto">
                <input type="checkbox" ref={inputConditionsRef} name="acceptConditions" id="acceptConditions"  className="me-3" />
                <label htmlFor="acceptConditions" className="form-label">Accept conditions.</label>
            </div>
            <div className="w-50 mx-auto">
                {/* <input type="submit" name="submitForm" onClick={handleSubmit} value="Submit" /> */}
                <button name="submitForm"onClick={handleSubmit} className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    </>;
}