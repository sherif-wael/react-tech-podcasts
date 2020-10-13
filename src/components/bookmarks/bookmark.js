import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    background-color: var(--white);
    box-shadow: 0px 1px 5px rgb(0, 0, 0, 0.2);
`

const StyledImage = styled.div`
    max-width: 100px;
    display: grid;
    background-color: var(--light-color);
    img{
        ${({theme}) => theme.mixins.img}
        margin: auto;
    }
`

const StyledWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    p{
        flex-grow: 1;
        font-weight: 300;
        margin: 0 0 6px;
    }
    .icon-wrapper{
        display: flex;
        .icons{
            margin-left: auto;
        }
        i{
            font-size: var(--fz-lg);
            color: var(--light-blue);
            padding: 0 5px;
            margin: 0 3px;
            cursor: pointer;
        }
    }
`

export default function Bookmark({episode, remove, playingEpisode, setEpisode}){
    let isPlayed = playingEpisode && playingEpisode.guid === episode.guid;
    return (
        <StyledContainer>
            <StyledImage>
                <img src={episode.image} alt="episode image" />
            </StyledImage>
            <StyledWrapper>
                <p>{episode.title}</p>
                <div className="icon-wrapper">
                    <div className="icons">
                        {
                            isPlayed ? 
                                <i className="fas fa-stop" onClick={() => setEpisode(null)}></i>
                                :
                                <i className="fas fa-play" onClick={() => setEpisode(episode)}></i>
                        }
                        <i className="fas fa-bookmark" onClick={() => remove(episode)}></i>
                    </div>
                </div>
            </StyledWrapper>
        </StyledContainer>
    )
}