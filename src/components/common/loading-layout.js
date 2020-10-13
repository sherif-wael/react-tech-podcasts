import React from "react";
import styled from "styled-components";
import {BackArrow} from "./index";


const StyledContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    .header{
        padding: 18px 20px;
        background-color: var(--dark-color);
        position: sticky;
        top: 0;
        display: flex;
        i{
            color: Var(--white);
            margin-left: auto;
            font-size: var(--fz-lg);
            cursor: pointer;
        }
    }
    .loader{
        padding: 10px;
        flex-grow: 1;
        ${({theme}) => theme.mixins.flexCenter};
    }
`


export default function LoadingLayout({children}){
    return (
        <StyledContainer>
            <div className="header">
                <BackArrow />
            </div>
            <div className="loader">
                {children}
            </div>
        </StyledContainer>
    )
}