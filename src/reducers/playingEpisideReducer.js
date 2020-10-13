import {combineReducers} from "redux";
import {SET_PLAYING_EPISODE, TOGGLE_PLAYING_STATUS, SET_PLAYING_POSITION} from "../actions/types";

const episodeInitialState = null;

const statusInitialState = {
    playingStatus: "PLAYING",
    position: 0
};


function episodeReducer(state = episodeInitialState, action){
    switch(action.type){
        case SET_PLAYING_EPISODE:
            return action.payload
        default:
            return state;
    }
}


function statusReducer(state = statusInitialState, action){
    switch(action.type){
        case SET_PLAYING_EPISODE:
            return {playingStatus: "PLAYING", position: 0};
        case TOGGLE_PLAYING_STATUS:
            return {...state, playingStatus: action.payload};
        case SET_PLAYING_POSITION:
            return {...state, position: action.payload};
        default: 
            return state
    }
}


const playingEpisodeReducer = combineReducers({
    episode: episodeReducer,
    status: statusReducer
})

export default playingEpisodeReducer