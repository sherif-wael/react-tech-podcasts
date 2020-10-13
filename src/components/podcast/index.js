import React, {useEffect} from "react";
import {decode} from "../../lib/utils-methods";
import styled from "styled-components";
import {connect} from "react-redux";
import {addPodcast} from "../../actions/index";
import Loader from "../layout/loader";
import ErrorMessage from "./error";
import PodcastHeader from "./header";
import Episodes from "./episodes";
import Layout from "../layout/layout";
import {LoadingLayout} from "../common";

function PodcastPage({history, match, podcasts, error, addPodcast}){
    let podcastName = decode(match.params.name);
    let podcast = podcasts[podcastName];
    useEffect(() => {
        if(!podcast){
            addPodcast(podcastName);
        }
    }, [])
    if(error){
        return  <ErrorMessage message={error} fullHeight={true} />
    }
    if(!podcast){
        return <Loader fullHeight={true} />
    }
    return (
        <Layout>
            <PodcastHeader data={podcast.data} />
            <Episodes episodes={podcast.data.episodes} />
        </Layout>
    )
}

function mapStateToProps(state){
    return {
        podcasts: state.podcasts.podcasts,
        error: state.podcasts.error
    }
}

export default connect(mapStateToProps, {addPodcast})(PodcastPage);