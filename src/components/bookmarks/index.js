import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import Bookmark from "./bookmark";
import {deleteBookmark, setPlayingEpisode} from "../../actions/index";
import {BackArrow} from "../common";


const StyledHeader = styled.div`
    display: flex;
    background-color: var(--dark-color);
    color: var(--black);
    padding: 18px 20px;
    position: sticky;
    top: 0;
    i{
        font-size: var(--fz-xl);
        cursor: pointer;
        margin-left: auto;
        color: var(--white);
    }
`

const StyledTitle = styled.div`
    padding: 0 15px;
    margin: 60px 0 20px;
    text-align: center;
    font-size: var(--fz-heading);
    h2{
        font-weight: 300;
        letter-spacing: 0.8px;
    }
    @media (${({theme}) => theme.bp.xs}){
        font-size: 26px;
        margin: 40px 0 15px;
    }
`

const StyledBookmarks = styled.div`
    padding: 50px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    max-width: 95%;
    margin: 0 auto;
    @media (${({theme}) => theme.bp.sm}){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px 10px;
    }
    @media (${({theme}) => theme.bp.xs}){
        grid-template-columns: 1fr;
        grid-gap: 20px 15px;
    }
`

function Bookmarks({bookmarks, deleteBookmark, setPlayingEpisode, playingEpisode}){
    return (
        <div>
            <StyledHeader className="small-side-paddings">
                <BackArrow />
            </StyledHeader>
            <StyledTitle>
                <h2>Your Bookmarks!</h2>
            </StyledTitle>
            <div>
                <StyledBookmarks>
                    {
                        Object.keys(bookmarks).map((title, i) => (
                            <Bookmark episode={bookmarks[title]} remove={deleteBookmark} key={i} 
                                    setEpisode={setPlayingEpisode} playingEpisode={playingEpisode} />
                        ))
                    }
                </StyledBookmarks>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        bookmarks: state.bookmarks,
        playingEpisode: state.playingEpisode.episode
    }
}

export default connect(mapStateToProps, {deleteBookmark, setPlayingEpisode})(Bookmarks)

