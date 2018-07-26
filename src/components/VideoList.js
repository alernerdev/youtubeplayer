import React from "react";
import VideoListItem from "./VideoListItem";

/* when using functional components, props arrive as a function argument */
const VideoList = (props) => {
    // for each video in the list, return a video item
    const videoItems = props.videos.map((video) => {
        // etag is unique and can serve as id for keys in the list
        return <VideoListItem 
                    key= {video.etag} 
                    onVideoSelect={props.onVideoSelect}
                    video={video} 
                />
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
};

export default VideoList;