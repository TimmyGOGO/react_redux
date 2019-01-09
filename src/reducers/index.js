import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import tracks from './tracks';
import playlists from './playlists';
import filterTracks from './filterTracks';

export default (history) => combineReducers({
  router: connectRouter(history),
  tracks,
  playlists,
  filterTracks
});