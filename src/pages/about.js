import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>RB Dream - Kikinda</h1>
      <p>Our shop's story is going to be amazing!</p>
      <Link to="/contact">Get in Touch!</Link>
      <Footer />
    </div>
  )
}

export default AboutPage
