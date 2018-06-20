import React from 'react'



const Suggestions = (props) => {

  const options = props.results.map(artist => (
    <li key={artist.id}>
      <div>{artist.name}</div>
      <img src={artist.images[0] ? artist.images[0].url : "http://via.placeholder.com/100X100" } width="100" alt=""/>
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions