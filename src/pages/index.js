import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <h2>This is RB Dream, a fishing store in beautiful Kikinda</h2>
      <p>
        Want to get in touch? <Link to="/contact">Contact us</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
