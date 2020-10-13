import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import bookmarksReducer from "./bookmarksReducer";
import podcastsReducer from "./podcastsReducer";
import playingEpisodeReducer from "./playingEpisideReducer";


const rootReducer = combineReducers({
    podcasts: podcastsReducer,
    bookmarks: bookmarksReducer,
    playingEpisode: playingEpisodeReducer
})


const middleware = applyMiddleware(thunk)

const store = createStore(rootReducer, middleware);


export default store;