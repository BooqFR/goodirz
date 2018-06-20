import React, { Component } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import Suggestions from './Suggestions/Suggestions'
import './search.css';


const spotifyApi = new SpotifyWebApi();

class Search extends Component {

  state = {
    results: []
  }

  searchArtists = () => {
    if (this.search.value) {
      spotifyApi.searchArtists(this.search.value+'*')
      .then((response) => {
        this.setState({
          results: response.artists.items
        })
      })
    }
    else {
      this.setState({
        results: []
      })
    }

  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.searchArtists}
          className="search"
        />
        <Suggestions results={this.state.results}/>
      </form>
    )
  }
}

export default Search