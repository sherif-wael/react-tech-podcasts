import {css} from "styled-components";



const transition = css`
    .fade-enter{
        transform: scale(0);
        opacity: 0;
    }
    .fade-enter-active{
        transform: scale(1);
        opacity: 1;
        transition: transform 500ms ease,
        opacity 500ms ease;
    }
    .fade-exit{
        transform: scale(1);
        opacity: 1;
    }
    .fade-exit-active{
        transform: scale(0);
        opacity: 0;
        transition: transform 500ms ease,
                    opacity 500ms ease;
    }
`

export default transition