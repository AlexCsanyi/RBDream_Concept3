import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello!</h1>
      <h2>This is RB Dream, a fishing store in beautiful Kikinda</h2>
      <p>
        Want to get in touch? <Link to="/contact">Contact us</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
