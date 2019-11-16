import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Button from "./button"

import heroStyles from "./hero.module.scss"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={heroStyles.hero}>
      <div className={heroStyles.heroGroup}>
        <h1>
          <Link className={heroStyles.title} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
        <p className={heroStyles.intro}>
          If you love fishing this is the place to be! We are the largest
          retailers of fishing products in Kikinda.
        </p>
        <Button></Button>
      </div>
    </div>
  )
}

export default Hero
