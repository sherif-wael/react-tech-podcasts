import {css} from "styled-components";


const mixins = {
    flexSpaceBetween: css`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,
    flexCol: css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `,
    flexCenter: css`
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    img: css`
        display: block;
        max-width: 100%;
        overflow: hidden;
    `,
    button: css`
        padding: 7px 15px;
        background-color: var(--primary-color);
        color: var(--white);
        text-transform: uppercase;
    `
}


export default mixins;