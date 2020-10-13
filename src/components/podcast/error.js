import React from "react";
import styled from "styled-components";
import {LoadingLayout} from "../common";

const StyledContainer = styled.div`
    p{
        color: gray;
        font-size: 18px;
        font-weight: 600;
    }
`

export default function ErrorMessage({message}){
    return (
        <LoadingLayout>
            <StyledContainer>
                <p>{message}</p>
            </StyledContainer>
        </LoadingLayout>
    )
}