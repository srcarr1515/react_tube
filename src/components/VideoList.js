import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onSelectVideo }) => {
    const vid_list = videos.map((v)  => {
        return <VideoItem key={v.id.videoId} onVideoSelect ={onSelectVideo}  video={v}/>
    })

    return (
        <div className="ui relaxed divided list">
            {vid_list}
        </div>
    )
}

export default VideoList;