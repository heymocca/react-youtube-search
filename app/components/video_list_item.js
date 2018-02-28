import React from 'react';

const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item">
            <div className="media-list">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{video.snippet.title}</h4>
                </div>
            </div>
        </li>
);

}

export default VideoListItem;
