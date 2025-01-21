import {useContext} from 'react';
import {lngContext} from "./LanguageContext";


const LanguageSelector = () =>{
    const {toggleLanguage} = useContext(lngContext);
    return (
        <>
        <button onClick={() =>toggleLanguage("English")}>English</button>
        <button onClick={() =>toggleLanguage("Spanish")}>Spanish</button>
        </>
    )
}

export default LanguageSelector;