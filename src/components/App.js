import React, { useState, useEffect } from 'react'

import youtube from '../apis/youtube'

import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    onTermSubmit('react course')
  }, [])

  const onTermSubmit = async term => {
    const { data } = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    setVideos(data.items)
    setSelectedVideo(data.items[0])
  }

  const onVideoSelect = video => setSelectedVideo(video)

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>

          <div className='five wide column'>
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
