import {useState, createContext} from 'react';

const lngContext = createContext();

const LanguageContext = ({children}) =>{
    const [language,setLanguage] = useState("English");

    const toggleLanguage = (newlanguage) =>{
        setLanguage(newlanguage)
    }
   
    return (
        <>
        <lngContext.Provider value={{language , toggleLanguage}}>
            {children}
        </lngContext.Provider>
        </>
    )
}
export { LanguageContext, lngContext};