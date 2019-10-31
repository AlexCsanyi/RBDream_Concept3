import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>RB Dream - Kikinda</h1>
      <p>Our shop's story is going to be amazing!</p>
      <Link to="/contact">Get in Touch!</Link>
    </Layout>
  )
}

export default AboutPage
