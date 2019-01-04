import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return 'Loading...'
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
            <iframe width="560" height="315" src={videoSrc} frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="ui segment">
                <h4 className="header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>  
        </div>
        
    )
}

export default VideoDetail;