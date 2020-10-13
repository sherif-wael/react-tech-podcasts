import {createGlobalStyle} from "styled-components"
import transition from "./transition";

const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #222;
        --dark-color: #080808;
        --light-color: #f3f3f3;
        --lighter-color: #f6f7fa;
        --white: #fff;
        --black: #111;
        --secondary-color: #f44336;
        --fz-xxs: 12px;
        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;
        --fz-xl: 20px;
        --fz-xxl: 22px;
        --fz-heading: 32px;
        --border-radius: 4px;
        --light-blue: #1173cf;
        --light-outline: rgb(0, 0, 0, 0.1);
        --darker-outline: rgb(0, 0, 0, 0.2);
    }

    html {
        box-sizing: border-box;
        width: 100%;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

    body{
        margin: 0;
        overflow-x: hidden; 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        scroll-behavior: smooth;
        &.hidden{
            overflow: hidden;
        }       
    }

    section{
        padding: 70px 0;
        @media (max-width: 768px){
            padding: 40px 0;
        }
        @midia (max-width: 480px){
            padding: 25px 0;
        }
    }

    h1,h2,h3,h4,h5,h6{
        margin: 0 0 10px 0;
    }

    a{
        text-decoration: none;
        color: var(--black);
        display: inline-block;
    }
    i{
        display: inline-block;
    }
    button{
        border: none;
        cursor: pointer;
        &:focus, &:active{
            outline: none;
        }
    }

    p{
        margin: 0 0 15px 0;
    }

    .side-paddings{
        padding-left: calc(1rem + (8 - 5) * ((100vw - 20rem) / (100 - 20)));
        padding-right: calc(1rem + (8 - 5) * ((100vw - 20rem) / (100 - 20)));
    }
    .small-side-paddings{
        padding-left: calc(1rem + (8 - 6) * ((100vw - 20rem) / (100 - 20)));
        padding-right: calc(1rem + (8 - 6) * ((100vw - 20rem) / (100 - 20)));
    }
    figure{
        padding: 0;
        margin: 0;
    }
    input{
        &:focus, &:active{
            outline: none;
        }
    }
    ${transition};
`


export default GlobalStyle;