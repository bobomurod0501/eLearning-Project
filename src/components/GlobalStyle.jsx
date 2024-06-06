import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #2a2e35;
        font-family: 'SF Pro Display', sans-serif;
        user-select: none;
    }
    button{
        font-weight: bold;
        font-size: 1.1rem;
        background-color: transparent;
        padding: 1rem 2rem;
        cursor: pointer;
        border: 3px solid #ff80ed;
        color: #f0f8ff;
        transition: 0.3s all linear;
        &:hover{
            background-color: #ff80ed;
            color: #2a2e35;
        }
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: #f0f8ff;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
    }
    span{
        color: #ff80ed;
        font-weight: bold;
    }
    s{
        font-size:1.1rem;
    }
    p{
        color: #ededed;
        margin: 30px 0;
        font-size: 1.4rem;
    }
`

export default GlobalStyle