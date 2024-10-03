import {useState, useRef, useEffect } from 'react';

export default function Form(){

    const name = useRef('');
    const email = useRef('');
    const message = useRef('');
    const acceptConditions = useRef(false);
    
    const [validForm,setValidForm] = useState(true);
    
    const [isFormSent,setIsFormSent] = useState(false);

    const [errors, setErrors] = useState({});  
    
    const requiredField = (field) => {

        if(field.value.trim() === ''){

            setErrors( prevState => {return {...prevState, [field.id] : field.id + ' is required.' }});
            field.style.borderColor = 'red';
            return false;
    
        }else if(field.getAttribute("style")){
            field.removeAttribute("style")
        }
        return true;
    }
    
    const watchForm = () => {
        validateForm();
    }
    
    const validateForm = () => {

        let valideForm = true;
        
        setErrors([]);

        valideForm = requiredField(name.current);
        valideForm = requiredField(email.current);
        valideForm = requiredField(message.current);
        
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if(!regex.test(email.current.value) && (email.current.value.trim() !== '')){        
            
            setErrors( prevState => {return {...prevState, [email.current.id] : ' Email is not valid.' }})
            email.current.style.borderColor = 'red';
            valideForm = false;

        }else if(regex.test(email.current.value)){
            if(email.current.getAttribute("style")){
                email.current.removeAttribute("style")
            }
        }

        if(message.current.value.length < 200){
            
            setErrors( prevState => {return {...prevState, [message.current.id] : `Message need to be more or equal then 
                ${message.current.value.length} /200characters.`}});
            message.current.style.borderColor = 'red';

            valideForm = false;
        }

        if(!acceptConditions.current.checked){
            setErrors( prevState => {return {...prevState, [acceptConditions.current.id] : 'You need to accept terms and conditions.' }});
            acceptConditions.current.style.borderColor = 'red';

            valideForm = false;
        }

        return valideForm;

    }

    const displayErrors = () => {
        return Object.keys(errors).map((key) =>  <li key={key}>{ key + ' : ' + errors[key] }</li>)
    };

    const displaySpanError = (key) => {

        if(key in errors){
            return <span className="text-danger">{errors[key]}</span>;
        }
        return '';
    }
   

    useEffect(() => {
        if(Object.keys(errors).length !== 0){
            setValidForm(false);
        }else{
            setValidForm(true);
        }
    }
    ,[errors]);
    
    const resetValues = () =>{
        name.current.value='';
        email.current.value='';
        message.current.value = '';
        acceptConditions.current.checked = false;
    }

    //[submit from]
    const submitForm = (e) => {

        e.preventDefault();
        
        
        if(validateForm()){

            resetValues();
            setIsFormSent(true);
        }
        console.log(errors);
      

    }
    	
    const reloadPage = () => {

    }
    //[JSX]
    return <>
        {
            Object.keys(errors).length ?
            <div className="alert alert-danger" role="alert">
                <ul>
                    {   
                        displayErrors()
                    }   
                </ul>
            </div>
            : ''
        }

        { isFormSent ? 
                <div className="alert alert-success" role="alert">
                    <p>Form successfully sent to the server !</p>
                    <a href=""  className="btn btn-primary">return to form page</a>
                </div> 
                :  
                <form onSubmit={submitForm} onChange={watchForm}>
                <div className="mb-3 mt-3 w-50 mx-auto">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" id="name" ref={name} className="form-control"/>
                    {
                        (Object.keys(errors).length !== 0) ?
                        displaySpanError(name.current.id) : ''
                    }
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label htmlFor="email" className="form-label">email</label>
                    <input type="text" name="email" id="email" ref={email} className="form-control"/>
                    {  
                        (Object.keys(errors).length !== 0) ?
                        displaySpanError(email.current.id) : ''
                    }
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" className="form-control" ref={message} rows="4">
                    
                    </textarea>
                    {  
                        (Object.keys(errors).length !== 0) ?
                        displaySpanError(message.current.id) : ''
                    }
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <div>
                        <input type="checkbox" name="acceptConditions" id="acceptConditions" ref={acceptConditions} className="me-3" />
                        <label htmlFor="acceptConditions" className="form-label">Accept terms and conditions.</label>
                    </div>
                    {  
                        (Object.keys(errors).length !== 0) ?
                        displaySpanError(acceptConditions.current.id) : ''
                    }
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <button type="submit" className="btn btn-primary" disabled={!validForm}>Submit</button>
                </div>
            </form>  
        }
        
    </>;

}