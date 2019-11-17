import React from "react"
import cardStyles from "./card.module.scss"

const Card = props => {
  return (
    <div className={cardStyles.card}>
      <img alt={props.alt} src={props.image}></img>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default Card
