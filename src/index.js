import _ from "lodash";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from "youtube-api-search";

import SearchBar from './components/SearchBar.js';
import VideoList from './components/VideoList.js';
import VideoDetail from './components/VideoDetail.js';

const YOUTUBE_API_KEY = 'AIzaSyCZKMOmthm0Yja09v4LeU7s-RjYJ3lbLrQ';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('flamenco');
    }

    videoSearch(term) {
        YoutubeSearch(
            { key: YOUTUBE_API_KEY, term: term },
            (videos) => {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
            }
        );

    }

    /* videolist takes a callback so that we are notified when selection changed */
    /* searchbar takes a callback so that we are notified when typed input changes */
    render() {
        /* debounce delays the callback a bit */
        const videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 400 ); // in milliseconds

        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch }/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={ (selectedVideo) => this.setState({ selectedVideo }) }
                />
            </div>
        );
    }
}

// the DOM container is the element with the "container" class
ReactDOM.render(<App />, document.querySelector('.container'));