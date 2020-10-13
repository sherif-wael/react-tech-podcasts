import React from "react";
import Player from "./player";
import {LoadingLayout} from "../common";
import {connect} from "react-redux";
import ErrorMessage from "../podcast/error"

function NowPlaying({episode}){
    if(!episode){
        return (
            <ErrorMessage message="Nothing is playing right now!" />
        )
    }
    return (
        <LoadingLayout>
            <Player className="full-page" sound={false} />
        </LoadingLayout>
    )
}

function mapStateToProps(state){
    return {
        episode: state.playingEpisode.episode
    }
}

export default connect(mapStateToProps)(NowPlaying)