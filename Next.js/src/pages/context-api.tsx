import React from "react";
import {useState, useContext} from "react";

interface ThemeContextType{
    isDarkTheme?: boolean;
    themeToggle?: ()=>void;
}
const ThemeContext = React.createContext<ThemeContextType>({});

function ParentComponent(){
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    console.log(isDarkTheme);

    return(
        <ThemeContext.Provider value = {{isDarkTheme, themeToggle: ()=>{setIsDarkTheme(!isDarkTheme)}}}>
            <ChildComponent/>
        </ThemeContext.Provider>
    )
}

function ChildComponent(){
    return(
        <GrandChildComponent/>
    )
}

function GrandChildComponent(){
    const theme = useContext(ThemeContext);
    return(
        <button onClick = {theme.themeToggle}>Toggle</button>
    )
}

export default ParentComponent;