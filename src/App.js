import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let fakeServerData = {
  user: {
    name: 'Han',
    playlists: [
      {
        name: 'p1',
        songs: [{name: 's1', duration: 100}, {name: 's1', duration: 100}, {name: 's1', duration: 100}]
      }, {
        name: 'p2',
        songs: [{name: 's21', duration: 100}, {name: 's21', duration: 100}, {name: 's21', duration: 100}]
      }, {
        name: 'p3',
        songs: [{name: 's31', duration: 100}, {name: 's31', duration: 100}, {name: 's31', duration: 100}]
      }, {
        name: 'p4',
        songs: [{name: 's41', duration: 100}, {name: 's41', duration: 100}, {name: 's41', duration: 100}]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ width: '40%', display: 'inline-block' }}>
        <h2>{this.props.playlists.length} Playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)},[])
      let totalDuration = allSongs.reduce((sum, eachSong) => {
        return sum + eachSong.duration
      }, 0)
    return (
      <div style={{ width: '40%', display: 'inline-block' }}>
        <h2>{totalDuration} Hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div>
        <img />
        <input type="text" />
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{ width: '25%', display: 'inline-block' }}>
        <img />
        <h3>playlist Name</h3>
        <ul>
          <li>song1</li>
          <li>song1</li>
          <li>song1</li>
          <li>song1</li>
        </ul>
      </div>

    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {}
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        serverData: fakeServerData
      })
    }, 2000)

  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1>{this.state.serverData.user.name}'s playlist</h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists} />
            <HoursCounter playlists={this.state.serverData.user.playlists}/>

            <Filter />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div> : <h1>loading...</h1>
        }
      </div>
    );
  }
}

export default App;
