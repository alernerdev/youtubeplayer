import React from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from "youtube-api-search";

import SearchBar from './components/SearchBar.js';

const YOUTUBE_API_KEY = 'AIzaSyCZKMOmthm0Yja09v4LeU7s-RjYJ3lbLrQ';

YoutubeSearch(
    {key: YOUTUBE_API_KEY, term: 'flamenco'},
    function(data) {
        console.log(data);
    }
);

const App = () =>     
    <SearchBar />;

// the DOM container is the element with the "container" class
ReactDOM.render(<App />, document.querySelector('.container'));