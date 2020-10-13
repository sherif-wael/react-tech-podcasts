import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {GlobalStyle, theme} from "../styles/index";
import {Provider} from "react-redux";
import store from "../reducers/index";
import Navbar from "./layout/Navbar";
import Home from "./home/index";
import Podcast from "./podcast/index";
import Player from "./player/player";
import Bookmarks from "./bookmarks";
import NowPlaying from "./player/now-playing";

export default function App(){
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Player className="fixed" sound={true} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/podcast/:name" component={Podcast} />
            <Route path="/bookmarks" exact component={Bookmarks} />
            <Route path="/nowplaying" exact component={NowPlaying} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}