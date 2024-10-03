import {useState,useRef} from 'react';

export default function Form(){

    const inputNameRef = useRef('');
    const inputCityRef = useRef('Montreal');
    const inputAgeRef = useRef('');
    const inputCountryRef = useRef('CA');
    const inputConditionsRef = useRef('');
    
    // console.log(inputCountryRef.current);
    
    const [errors,setErrors] = useState([]);
    
    const validateForm = () => {

        const name = inputNameRef.current.value;
        const city = inputCityRef.current.value;
        const age = inputAgeRef.current.value;
        const country = inputCountryRef.current.value;
        const acceptConditions  = inputConditionsRef.current.checked;
        
        console.log(acceptConditions)
        
        let validate = true;
        let regex = /1[3-9]|[2-9][0-9]/;

        if(name.trim() === ''){
            setErrors(prevState => [...prevState, 'name can\'t be empty.']);
            validate =false;
        }
        if(city.trim() === ''){

            setErrors(prevState => [...prevState, 'City can\'t be empty.']);
            validate =false;
        }

        if(!regex.test(age) || age == undefined){
            setErrors(prevState => [...prevState, 'Age should be a number between 13-99']);
            validate =false;
        }

        if(country.trim() === ''){
            setErrors(prevState => [...prevState, 'You should select a country']);
            validate =false;
        }
        
        if(!acceptConditions){
            
            console.log(errors)
        
            setErrors(prevState => [...prevState, 'You should accept terms and conditions.']);
            validate =false;
        }
        
        return validate;
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        if(validateForm()){
            alert(
                inputNameRef.current.value + " , " +
                inputCityRef.current.value + " , " +
                inputAgeRef.current.value + " , " +
                inputCountryRef.current.value + " , " +
                inputConditionsRef.current.checked
            )
        }
    }

    function getFlagEmoji(countryCode) {
        const codePoints = countryCode
          .toUpperCase()
          .split('')
          .map(char =>  127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
    }
    return <>
        {
          errors.length > 0 ? 
            <div className="alert alert-danger" role="alert">
                <ul>
                {errors.map((error,key) => <li key={key}>* {error}</li>)}
                </ul>
                
            </div> : ''
        }
        
        
        <form>
            <div className="mb-3 mt-3 w-50 mx-auto">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text"  name="name" id="name" ref={inputNameRef} className="form-control"/>
            </div>
            <div className="mb-3 w-50 mx-auto">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" name="city" defaultValue = {inputCityRef.current} id="city" ref={inputCityRef} className="form-control"/>
            </div>
            <div className="mb-3 w-50 mx-auto">    
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" name="age" id="age" ref={inputAgeRef} className="form-control"/>
            </div>
            <div className="mb-3 w-50 mx-auto">
                <label htmlFor="country" className="form-label" >Country</label>
                <select name="country" id="country" defaultValue = {inputCountryRef.current} ref={inputCountryRef} className="form-select">
                    <option value="CA">Canada {getFlagEmoji('CA')}</option>
                    <option value="US">United-States {getFlagEmoji('US')}</option>
                    <option value="MX">Mexique {getFlagEmoji('MX')}</option>
                    <option value="CS">Costa Rica {getFlagEmoji('CR')}</option>
                </select>
            </div>
            <div className="mb-3 w-50 mx-auto">
                <input type="checkbox" name="acceptConditions" id="acceptConditions" ref={inputConditionsRef}  className="me-3" />
                <label htmlFor="acceptConditions" className="form-label">Accept terms and conditions.</label>
            </div>
            <div className="w-50 mx-auto">
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </div>

        </form>

        
    </>
}