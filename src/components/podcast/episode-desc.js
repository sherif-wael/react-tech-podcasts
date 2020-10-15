import React, {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";
import styled from "styled-components";

const StyledContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 15px;
    z-index: 4;
    ${({theme}) => theme.mixins.flexCenter};
    overflow: hidden;
    
    .wrapper{
        max-width: 100%;
        width: 700px;
        display: flex;
        flex-direction: column;
        background-color: #166bc7;
        color: var(--white);
        box-shadow: 0 0 40px rgb(0, 0, 0, 0.5);
    }
`

const StyledHeader = styled.div`
    ${({theme}) => theme.mixins.flexSpaceBetween};
    padding: 15px 15px;
    background-color: #145091;
    box-shadow: 0 2px 5px rgb(0, 0, 0, 0.2);
    h3{
        margin: 0 20px 0 0;
        fotn-size: var(--fz-xxl);
        font-weight: 400;
        @media (${({theme}) => theme.bp.sm}){
            font-size: var(--fz-lg);
        }
    }
    i{
        font-size: var(--fz-lg);
        cursor: pointer;
        padding: 5px;
    }
`

const StyledDesc = styled.div`
    padding: 20px;
    max-height: 400px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: rgb(255, 255, 255, 0.2);
    }
    font-weight: 300;
    line-height: 1.4;
    margin: 0 0 2px;
`

export default function EpisodeDescription({episode, close}){
    let [state, setState] = useState(true);
    // useEffect(() => {
    //     setState(true)
    // }, [])
    return (
        <StyledContainer>
            <CSSTransition in={state} timeout={200} onExited={close} classNames="fade" unmountOnExit appear>
                    <div className="wrapper">
                        <StyledHeader>
                            <h3>{episode.title}</h3>
                            <i className="fas fa-times-circle" onClick={() => setState(false)}></i>
                        </StyledHeader>
                        <StyledDesc>
                            <div dangerouslySetInnerHTML={{__html: episode.description}}></div>
                        </StyledDesc>
                    </div>
            </CSSTransition>
        </StyledContainer>
    )
}