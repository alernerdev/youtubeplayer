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

        YoutubeSearch(
            { key: YOUTUBE_API_KEY, term: 'flamenco' },
            (videos) => {
                this.setState({ 
                    videos: videos,  
                    selectedVideo: videos[0]
                });
            }
        );
    }

    render() {
        /* videolist takes a callback so that we are notified when selection changed*/
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    videos={this.state.videos} 
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                />
            </div>
        );
    }
}

// the DOM container is the element with the "container" class
ReactDOM.render(<App />, document.querySelector('.container'));