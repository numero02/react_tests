import LanguageChange from "./LanguageChange"
import {useState} from "react";
import Form from './Form'

export default function Page(){

    const [displayLanguage,setDisplayLanguage] = useState('');

    return <>
        
        <h1>React Js</h1>
        
        <LanguageChange ChoosedLanguage={(param) => { setDisplayLanguage(param) } } />
        <Form />
        <h2>{displayLanguage}</h2>
    
    </>
}