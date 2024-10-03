export default function TextField({inputAttribut,children}){
    

    
    return (
        <>
            <label>First Name</label>
            <input name={inputAttribut} type='text' /> 
            {children}
            
       </>
    )
}