import React, { Component } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import Suggestions from './Suggestions'
import './search.sass';


const spotifyApi = new SpotifyWebApi();

class Search extends Component {

  state = {
    results: []
  }

  searchArtists = () => {
    spotifyApi.searchArtists(this.search.value+'*')
      .then((response) => {
        this.setState({
          results: response.artists.items
        })
      })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.searchArtists}
          class="search"
        />
        <Suggestions results={this.state.results}/>
      </form>
    )
  }
}

export default Search