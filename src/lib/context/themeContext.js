import { createContext } from "react"

export const THEME = {
    light : {
        pagebackgroundColor : "rgb(148 163 184)",
        headerbackgroundColor : "white",
        textcolor : "black",
    },

    dark : {
        pagebackgroundColor : "rgb(15 23 42)",
        headerbackgroundColor : "black",
        textcolor : "white",
    }
}

export const ThemeContext = createContext(THEME.light);