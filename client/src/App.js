import React, { Component } from 'react';
import Search from './components/Search/Search';
import mainLogo from './goodirz-logo.svg';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';


class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const spotifyApi = new SpotifyWebApi();
    const token = params.access_token;

    if (token) {
      spotifyApi.setAccessToken(token);
    }

    this.state = {
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  render() {
    return (
      <div className="App">
        <img src={mainLogo} alt="logo" width="250"/>
        <div>
          <a href='http://localhost:8888' > Login to Spotify </a>
        </div>
        <div>
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
