import React from 'react'

import youtube from '../apis/youtube'

import SearchBar from './SearchBar'
import VideoList from './VideoList'

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({ videos: response.data.items })
  }

  onVideoSelect = video => {
    console.log('From the App!', video)
    // this.setState({ selectedVideo: video })
  }

  render () {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

export default App
