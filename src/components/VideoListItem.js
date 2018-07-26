import React from "react";

/* the input parameter is props object, but it has a props in it that are matching my param names, 
this is automatically "expanded" 
*/
const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;