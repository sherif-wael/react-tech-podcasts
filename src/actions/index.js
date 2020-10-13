import {ADD_PODCAST, SET_ERROR, ADD_BOOKMARK, 
        DELETE_BOOKMARK, SET_PLAYING_EPISODE, 
        TOGGLE_PLAYING_STATUS, SET_PLAYING_POSITION} from "./types";
import podcasts from "../lib/podcasts";
import parser from "../lib/parser";
import axios from "axios"

export const addPodcast = podcastId => dispatch => {
    let p = podcasts.find(podcast => podcast.name === podcastId);
    dispatch({type: SET_ERROR, payload: null})
    axios({
        method: 'GET',
        timeout: 25 * 1000,
        url: `https://podcast-parse.glitch.me/?url=${p.link}`
        })
        .then(res => {
            let payload = {podcastId, podcast: res.data};
            dispatch({type: ADD_PODCAST, payload})
        })
        .catch(err => dispatch({type: SET_ERROR, payload: "Oops! something went wrong"}))
}

export const addBookmark = episode => dispatch => {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || {};
    let newBookmarks = {...bookmarks, [episode.guid]: episode};
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
    dispatch({type: ADD_BOOKMARK, payload: episode})
}

export const deleteBookmark = episode => dispatch => {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || {};
    let {[episode.guid]:value, ...newBookmarks} = bookmarks
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks))
    dispatch({type: DELETE_BOOKMARK, payload: episode});
}

export const setPlayingEpisode = episode => {
    return {type: SET_PLAYING_EPISODE, payload: episode}
}

export const togglePlayingStatus = playingStatus => {
    return {type: TOGGLE_PLAYING_STATUS, payload: playingStatus}
}

export const setPlayingPosition = position => {
    return {type: SET_PLAYING_POSITION, payload: position}
}