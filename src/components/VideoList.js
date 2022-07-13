import React from 'react'
import VideoItem from './VideoItem'
import PropTypes from 'prop-types'

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        video={video}
        key={video.id.videoId}
      />
    )
  })

  return <div className='ui relaxed divided list'>{renderedList}</div>
}

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  onVideoSelect: PropTypes.func.isRequired
}

export default VideoList
