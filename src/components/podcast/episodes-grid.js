import React, {useState} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {setPlayingEpisode, deleteBookmark, addBookmark} from "../../actions/index";
import {maxLength} from "../../lib/utils-methods";
import Moment from "react-moment";
import EpisodeDesc from "./episode-desc";

const StyledContainer = styled.div`
    .grid{
        max-width: 1024px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 25px 30px;
        @media (max-width: 880px){
            grid-template-columns: 1fr;
            grid-gap: 20px
        }
    }
`

const StyledEpisode = styled.div`
    padding: 12px 15px 15px;
    outline: 1px solid var(--light-outline);
    transition: box-shadow 300ms ease;
    ${({theme}) => theme.mixins.flexSpaceBetween};
    &:hover{
        outline: none;
        box-shadow: 1px 3px 12px rgb(0, 0, 0, 0.3);
    }
    .icon{
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid var(--light-outline);
        transition: background-color 300ms ease;
        background-color: transparent;
        ${({theme}) => theme.mixins.flexCenter}
        i{
            font-size: 16px;
            margin: 0 0 0 3px;
            color: rgb(0, 0, 0, 0.4);
            transiton: color 300ms ease;
            &.fa-stop{
                margin: 0;
            }
        }
        &:hover{
            background-color: var(--light-blue);
        }
        &:hover i{
            color: var(--white);
        }
    }

    .title{
        margin: 0 5px 0 0;
        cursor: pointer;
        p{
            margin: 0;
            font-size: var(--fz-md);
            font-weight: 400;
            color: var(--black);
        }
        .date{
            margin: 0 0 5px;
            color: gray;
            display: flex;
            align-items: center;
            font-size: var(--fz-xs);
            .circle{
                width: 8px;
                height: 8px;
                display: inline-block;
                margin: 0 5px;
                background-color: rgb(0, 0, 0, 0.2);
                border-radius: 50%;
            }
            i{
                margin: 0 6px 0 0px;
                vertical-align: center;
                font-size: var(--fz-md);
                cursor: pointer;
            }
        }
    }
    &.current .icon{
        background-color: var(--light-blue);
        i{
            color: var(--white);
        }
    }
`

const StyledNoResult = styled.div`
    text-align: center;
    color: gray;
    font-size: var(--fz-sm);
`

function EpisodeGrid({data, addBookmark, deleteBookmark, setPlayingEpisode, playingEpisode, bookmarks}){
    let [desc, setDesc] = useState(null);
    if(!data.length){
        return (
            <StyledNoResult>
                <p>No Result Found!</p>
            </StyledNoResult>
        )
    }
    return (
        <StyledContainer>
            <div className="grid">
                {
                    data.map((episode, i) => {
                        let {title, published, duration, guid} = episode
                        let isPlayed = playingEpisode && playingEpisode.guid === guid;
                        let bookmarked = bookmarks[guid];
                        let handleClick = () => {
                            isPlayed ? setPlayingEpisode(null) : setPlayingEpisode(episode);
                        }
                        let handleBookmarkClick = () => {
                            bookmarked ? deleteBookmark(episode) : addBookmark(episode)
                        }
                        return (
                            <StyledEpisode key={i} 
                                className={isPlayed ? "current" : ""}>
                                <div className="title">
                                    <p className="date">
                                        {bookmarked ? 
                                            <i className="fas fa-bookmark" onClick={handleBookmarkClick}></i> 
                                               : 
                                            <i class="far fa-bookmark" onClick={handleBookmarkClick}></i>}
                                        <Moment format="MMMM DD, YYYY" fromNow>{published}</Moment>
                                        <span className="circle"></span>{Math.floor(duration / 60)}min
                                    </p>
                                    <p onClick={() => setDesc(episode)}>{maxLength(title, 25)}</p>
                                </div>
                                <div className="icon" onClick={handleClick}>
                                    {
                                        isPlayed ? 
                                        <i className="fas fa-stop"></i> 
                                         :
                                        <i className="fas fa-play"></i>
                                    }
                                </div>
                            </StyledEpisode>
                        )
                    })
                }
            </div>
            {desc && <EpisodeDesc episode={desc} close={() => setDesc(null)} />}
        </StyledContainer>
    )
}

function mapStateToProps(state){
    return {
        playingEpisode: state.playingEpisode.episode,
        status: state.playingEpisode.status,
        bookmarks: state.bookmarks
    }
}

export default connect(mapStateToProps, {addBookmark, deleteBookmark, setPlayingEpisode})(EpisodeGrid)