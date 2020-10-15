import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import classNames from "classnames"

const StyledContainer = styled.div`
    &.expand{
        min-height: 100vh;
        @media (max-width: 660px){
            min-height: calc(100vh - 25px);
        }
        display: flex;
        flex-direction: column;
        .wrapper{
            flex-grow: 1;
            ${({theme}) => theme.mixins.flexCenter};
            padding: 10px;
        }
    }
`

export default function Layout({children, goBack, expand}){
    return (
        <StyledContainer className={classNames({expand: expand})}>
            <Navbar goBack={goBack} />
            <div className="wrapper">
                {children}
            </div>
        </StyledContainer>
    )
}