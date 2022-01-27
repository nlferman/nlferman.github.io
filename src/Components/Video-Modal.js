import React, { Component } from 'react';
import ReactPlayer from 'react-player/file';

class VideoModal extends Component {
    render () {
        const { displayModal, videoSrc } = this.props;
        
        return (
            <div className='popup-modal' style={{display: displayModal}}>
                {
                    videoSrc === '' || videoSrc === null ?
                        null : 
                        <ReactPlayer url={videoSrc} controls={true} width="600" height="400" />
                }
            </div>
        )
    }
}

export default VideoModal;