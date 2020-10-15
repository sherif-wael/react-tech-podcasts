import {css} from "styled-components";



const transition = css`
    .fade-appear{
        transform: scale(0);
        opacity: 0;
    }
    .fade-appear-active{
        transform: scale(1);
        opacity: 1;
        transition: transform 200ms linear,
                    opacity 200ms linear;
    }
    .fade-enter{
        transform: scale(0);
        opacity: 0;
    }
    .fade-enter-active{
        transform: scale(1);
        opacity: 1;
        transition: transform 200ms linear,
                    opacity 200ms linear;
    }
    .fade-exit{
        transform: scale(1);
        opacity: 1;
    }
    .fade-exit-active{
        transform: scale(0);
        opacity: 0;
        transition: transform 200ms linear,
                    opacity 200ms linear;
    }
`

export default transition