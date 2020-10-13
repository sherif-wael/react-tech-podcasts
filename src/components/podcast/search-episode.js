import React from "react";
import styled from "styled-components";


const StyledContainer = styled.div`
    text-align: center;
    padding: 20px 0;
    margin: 0 0 30px;
    input{
        font-size: var(--fz-lg);
        padding: 7px 15px;
        width: 300px;
        max-width: 100%;
        border-radius: 20px;
        border: 0.6px solid var(--darker-outline);
    }
`


export default function SearchEpisode({onChange, value}){
    return (
        <StyledContainer>
            <input type="search" value={value} placeholder="Search..."
                    onChange={e => onChange(e.target.value)} />
        </StyledContainer>
    )
}
