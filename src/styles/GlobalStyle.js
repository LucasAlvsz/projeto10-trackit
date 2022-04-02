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
    main{
        overflow: auto;
    }
    /* Firefox */
    *{
    scrollbar-width: thin;
    scrollbar-color: #fff #E5E5E5;;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
    width: 9px;
    }

    *::-webkit-scrollbar-track {
    background: #E5E5E5;
    }

    *::-webkit-scrollbar-thumb{
        background-color: #fff;
        border-radius: 10px;
        border: 2px solid #E5E5E5;
    }
`
