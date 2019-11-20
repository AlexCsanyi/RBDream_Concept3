import React from "react"
import { Link } from "gatsby"
import buttonStyles from "./button.module.scss"

const Button = props => {
  return (
    <div className={buttonStyles.buttonContainer}>
      <Link
        className={buttonStyles.standardButton}
        to={`/${props.linkAddress}`}
      >
        {props.text}
      </Link>
    </div>
  )
}

export default Button
