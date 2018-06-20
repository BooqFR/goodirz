import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
        <div>{r.name}</div>
        <img src={r.images[0] ? r.images[0].url : "http://via.placeholder.com/100X100" } width="100" alt=""/>
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions