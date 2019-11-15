import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import homeStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"></Head>
      <h1>Hello!</h1>
      <h2>This is RB Dream, a fishing store in beautiful Kikinda</h2>
      <p>
        Want to get in touch?{" "}
        <Link className={homeStyles.link} to="/contact">
          Contact us
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
