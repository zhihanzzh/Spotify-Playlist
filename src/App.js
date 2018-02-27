import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let fakeServerData = {
  user: {
    name: 'Han',
    playlists: [
      {
        name: 'p1',
        songs: ['s1', 's2', 's3']
      }, {
        name: 'p2',
        songs: ['s21', 's22', 's23']
      }, {
        name: 'p3',
        songs: ['s31', 's32', 's33']
      }, {
        name: 'p4',
        songs: ['s41', 's42', 's43']
      }
    ]
  }
}

class Aggregate extends Component {
  render() {
    return (
      <div style={{ width: '40%', display: 'inline-block' }}>
        <h2>{this.props.playlists && this.props.playlists.length} Text</h2>
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
    this.setState({
      serverData: fakeServerData
    })
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.serverData.user && this.state.serverData.user.name}'s playlist
        </h1>
        <Aggregate playlists={this.state.serverData.user && this.state.serverData.user.playlists}/>
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
