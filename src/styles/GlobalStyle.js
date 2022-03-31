import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Lexend Deca', sans-serif;
    }

    button {
        cursor: pointer;
        border: none;
    }
    
    a {
        text-decoration: none;
    }
`
