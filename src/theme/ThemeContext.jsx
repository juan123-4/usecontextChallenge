
import {createContext,useContext,useState} from "react"

const ThemeContext=createContext()

export const ThemeProvider=({children})=>{
const [theme,setTheme]= useState("light")

const changeStyle = () => {
    setTheme((style) => (style === "light" ? "dark" : "light"));
  };

return(
    <ThemeContext.Provider value={{theme,changeStyle}}>
        {children}
    </ThemeContext.Provider>
)

}
export const UseButtonStyle = () => {
    return useContext(ThemeContext); 
  };
  