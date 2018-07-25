import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar.js';

const YOUTUBE_API_KEY = 'AIzaSyCZKMOmthm0Yja09v4LeU7s-RjYJ3lbLrQ';

const App = () =>     
    <SearchBar />;

// the DOM container is the element with the "container" class
ReactDOM.render(<App />, document.querySelector('.container'));