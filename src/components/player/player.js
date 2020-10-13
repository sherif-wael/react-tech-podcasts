import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import Sound from "react-sound";
import {setPlayingEpisode, setPlayingPosition, togglePlayingStatus} from "../../actions";
import {changeMinSec, maxLength} from "../../lib/utils-methods";

const StyledPlayer = styled.div`
    &.full-page{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: (--black);
        .logo{
            max-width: 200px;
            margin: 0 0 30px 0;
            img{
                ${({theme}) => theme.mixins.img};
            }
        }
    }
    &.fixed{
        position: fixed;
        bottom: 0;
        width: 100%;
        max-width: 1024px;
        overflow: hidden;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        background-color: var(--dark-color);
        z-index: 3;
        color: var(--white);
        @media (max-width: 660px){
            display: none;
        }
    }
    &.fixed .logo{
        display: grid;
        img{
            width: 70px;
            height: 70px;
            margin: auto;
        }
    }
`

const StyledRightSide = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .wrapper{
        flex-grow: 1;
        ${({theme}) => theme.mixins.flexSpaceBetween};
        padding: 0 10px;
    }
    .wrapper p{
        margin: 0 20px 0 0;
        font-size: var(--fz-lg);
    }
    &.full-page{
        .wrapper {
            flex-direction: column;
            margin: 10px 0;
            p{
                margin: 15px 0;
            }
        }
    }
`

const StyledControls = styled.div`
    display: flex;
    align-items: center;
    i{
        font-size: 16px;
        padding: 5px;
        margin: 0 5px;
        font-size: var(--fz-md);
        opacity: 0.8;
        cursor: pointer;
        transition: opacity 200ms ease;
        &:hover{
            opacity: 1;
        }
    }
    span{
        font-size: 11px;
    }
    &.full-page{
        flex-wrap: wrap;
        justify-content: center;
        span{
            flex-basis: 100%;
            text-align: center;
            order: 5;
            margin: 10px 0 0;
        }
    }
`

const StyledLoader = styled.div`
    height: 5px;
    background-color: var(--primary-color);
    .loaded{
        height: 100%;
        width: 0px;
        background-color: rgb(255, 255, 255, 0.6);
    }
`


function Player({status, episode, setPlayingEpisode, setPlayingPosition, togglePlayingStatus, className, sound}){
    let {playingStatus, position} = status;
    let posInSeconds = position / 1000;
    let stop = () => {
        setPlayingEpisode(null)
    }
    let setStatus = (value) => {
        togglePlayingStatus(value)
    }
    let setPosition = (time) => {
        let newPosition = posInSeconds + time < 0 || posInSeconds + time > episode.duration ? posInSeconds : posInSeconds + time;
        setPlayingPosition(newPosition * 1000);
    }
    return (
        episode 
        &&
        <StyledPlayer className={className}>
            <div className="logo">
                <img src={episode.image} alt="logo" />
            </div>
            <StyledRightSide className={className}>
                <StyledLoader>
                    <div className="loaded" style={{width: `${posInSeconds / episode.duration * 100}%`}}></div>
                </StyledLoader>
                <div className="wrapper">
                    <p>{maxLength(episode.title, 35)}</p>
                    <StyledControls className={className}>
                        <span className="dur">{changeMinSec(posInSeconds)} / {changeMinSec(episode.duration)}</span>
                        <i className="fas fa-backward" onClick={() => setPosition(-10)}></i>
                        {
                            playingStatus === "PLAYING" ? 
                                <i className="fas fa-pause" onClick={() => setStatus("PAUSED")}></i>
                                :
                                <i className="fas fa-play" onClick={() => setStatus("PLAYING")}></i>
                        }
                        <i className="fas fa-stop" onClick={stop}></i>
                        <i className="fas fa-forward" onClick={() => setPosition(10)}></i>
                    </StyledControls>
                </div>
            </StyledRightSide>
            {
                sound 
                &&
                <Sound 
                playStatus={playingStatus}
                url={episode.enclosure.url}
                position={position}
                onPlaying={({position}) => setPlayingPosition(position)}
                onFinishedPlaying={() => setPlayingEpisode(episode)}
                />
            }
        </StyledPlayer>
    )
}

function mapStateToProps(state){
    return{
        episode: state.playingEpisode.episode,
        status: state.playingEpisode.status
    }
}

export default connect(mapStateToProps, {setPlayingEpisode, setPlayingPosition, togglePlayingStatus})(Player)