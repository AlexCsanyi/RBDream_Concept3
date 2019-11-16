import React from "react"

import Footer from "./footer"
import Header from "./header"
import Hero from "./hero"
import "../styles/index.scss"
// import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div>
      <Header />
      <Hero />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
