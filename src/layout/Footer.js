import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContexts";
import './Footer.css'

const Footer = ()=> {

    const themeValues = useContext(ThemeContext);

    return(
        <div className="Footer">
            <h5>Developed by Fariba</h5>
            
            <div>
                <button onClick={()=>themeValues.setActiveTheme('green')} className="green">green</button>
                <button onClick={()=>themeValues.setActiveTheme('blue')} className="blue">blue</button>
                <button onClick={()=>themeValues.setActiveTheme('pink')} className="pink">Pink</button>
            </div>

        </div>
    )
}
export default Footer;