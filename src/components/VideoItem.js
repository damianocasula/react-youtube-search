import './VideoItem.css'
import React from 'react'
import PropTypes from 'prop-types'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className='video-item item'>
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />

      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  )
}

VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
  onVideoSelect: PropTypes.func.isRequired
}

export default VideoItem
