import react from "react";
import { useState } from "react";

function ParentComponent() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    console.log(isDarkTheme);
    return (
        <FirstChildComponent toggleTheme = {()=>{setIsDarkTheme(!isDarkTheme)}}/>
    )
}


function FirstChildComponent(prop: any){
    return (
        <SecondChildComponent toggleTheme = {prop.toggleTheme} />
    )
}


function SecondChildComponent(prop: any){
    return(
        <button onClick = {prop.toggleTheme} > Toggle</button>

    )
}

export default ParentComponent;

// so basically the data, in this case a function that toggles the theme, is passed from the parent component to the child component, and then to the grandchild component.