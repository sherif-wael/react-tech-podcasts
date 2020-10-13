import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import Bookmark from "./bookmark";
import {deleteBookmark, setPlayingEpisode} from "../../actions/index";
import Layout from "../layout/layout";


const StyledTitle = styled.div`
    padding: 0 15px;
    margin: 65px 0 20px;
    text-align: center;
    font-size: var(--fz-heading);
    h2{
        font-weight: 300;
        letter-spacing: 0.8px;
    }
    @media (${({theme}) => theme.bp.xs}){
        font-size: 24px;
        margin: 60px 0 15px;
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
        margin: 0 auto 50px;
    }
    @media (${({theme}) => theme.bp.xs}){
        grid-template-columns: 1fr;
        grid-gap: 20px 15px;
    }
`

function Bookmarks({bookmarks, deleteBookmark, setPlayingEpisode, playingEpisode}){
    return (
        <Layout goBack={true}>
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
        </Layout>
    )
}

function mapStateToProps(state){
    return {
        bookmarks: state.bookmarks,
        playingEpisode: state.playingEpisode.episode
    }
}

export default connect(mapStateToProps, {deleteBookmark, setPlayingEpisode})(Bookmarks)

