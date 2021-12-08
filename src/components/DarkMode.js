import React from 'react'
import "../components/DarkMode.css"
import { Switch } from 'antd';

const DarkMode = () => {

    let clicked="clickAchive"
    const body= document.body;
    const lightTheme="light"
    const darkTheme="dark"
     let theme


    if(localStorage){
        theme=localStorage.getItem("theme")
    }
    if(theme ===lightTheme || theme===darkTheme){
        body.classList.add(theme)
    }else{
        body.classList.add(lightTheme)
    }

     const changeTheme=(e)=>{
         if(theme===darkTheme){
             body.classList.replace(darkTheme, lightTheme)
             e.target.classList.remove(clicked)
             localStorage.setItem("theme","light")
             theme=lightTheme
             console.log("mode changed")
         }else{
            body.classList.replace(lightTheme, darkTheme)
            e.target.classList.add(clicked)
            localStorage.setItem("theme","dark")
            theme=darkTheme
         }
     }

    return (
        <div>
            
            <button
            className={theme==="dark" ? clicked: ""}
            id="themeMode"
             defaultChecked onClick={(e)=> changeTheme(e)}>Theme</button>
        </div>
    )
}

export default DarkMode
