import {ADD_PODCAST, SET_ERROR} from "../actions/types";

const initialState = {
    podcasts: {},
    error: null
}

function podcastsReducers(state = initialState, action){
    switch(action.type){
        case ADD_PODCAST: 
            return {
                ...state, 
                podcasts: {
                    ...state.podcasts,
                    [action.payload.podcastId]: action.payload.podcast
                }
            };
        case SET_ERROR: 
            return {
                ...state, 
                error: action.payload
            }
        default:
            return state
    }
}

export default podcastsReducers