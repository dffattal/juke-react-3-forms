import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Songs from './components/Songs';
import SinglePlaylist from './components/SinglePlaylist';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer'
import newPlaylist from "./components/newPlaylist";
import PlaylistContainer from "./containers/PlaylistContainer"
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer} foo={'foo'}>
      <Route path="/albums" component={Albums} />
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/playlist" component = {PlaylistContainer} />
      <Route path="/playlists/:playlistId" component = {SinglePlaylist} />
      <Route path="/artists" component={FilterableArtistsContainer} />
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="/artists/:artistId/albums" component={Albums} />
        <Route path="/artists/:artistId/songs" component={Songs} />
      </Route>
      <IndexRedirect to='/albums' />
    </Route>
  </Router>,
  document.getElementById('app')
);
