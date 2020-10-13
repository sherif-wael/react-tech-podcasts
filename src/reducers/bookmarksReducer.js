import {ADD_BOOKMARK, DELETE_BOOKMARK} from "../actions/types";

const initialState = JSON.parse(localStorage.getItem("bookmarks")) || {};


function bookmarksReducer(state = initialState, action){
    switch(action.type){
        case ADD_BOOKMARK:
            return {
                ...state,
                [action.payload.guid]: action.payload
            };
        case DELETE_BOOKMARK:
            let {[action.payload.guid]:value, ...withoutEpisode} = state;
            return withoutEpisode
        default:
            return state;
    }
}

export default bookmarksReducer