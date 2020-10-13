import React from "react";
import Player from "./player";
import Layout from "../layout/layout";
import {connect} from "react-redux";
import ErrorMessage from "../podcast/error"

function NowPlaying({episode}){
    if(!episode){
        return (
            <ErrorMessage message="Nothing is playing right now!" />
        )
    }
    return (
        <Layout goBack={true} expand={true}>
            <Player className="full-page" sound={false} />
        </Layout>
    )
}

function mapStateToProps(state){
    return {
        episode: state.playingEpisode.episode
    }
}

export default connect(mapStateToProps)(NowPlaying)