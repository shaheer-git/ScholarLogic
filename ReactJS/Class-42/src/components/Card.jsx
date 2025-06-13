import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <img src={props.link} alt="" />
    </div>
  )
}

export default Card