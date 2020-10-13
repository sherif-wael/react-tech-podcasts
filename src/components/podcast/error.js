import React from "react";
import styled from "styled-components";
import Layout from "../layout/layout";

const StyledContainer = styled.div`
    p{
        color: gray;
        font-size: 18px;
        font-weight: 600;
    }
`

export default function ErrorMessage({message}){
    return (
        <Layout goBack={true} expand={true}>
            <StyledContainer>
                <p>{message}</p>
            </StyledContainer>
        </Layout>
    )
}