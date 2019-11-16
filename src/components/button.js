import React from "react"
import { Link } from "gatsby"
import buttonStyles from "./button.module.scss"

const Button = () => {
  return (
    <div>
      <Link className={buttonStyles.standardButton} to="/about">
        Find Out More
      </Link>
    </div>
  )
}

export default Button
