import { useContext } from "react";
import {lngContext} from './LanguageContext'


const LanguageDisplay =() =>{
    const {language} = useContext(lngContext)
    return (
        <>
        <h3>The Language is :{language}</h3>
        </>
    )
}
export default LanguageDisplay;