import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import AboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About"></Head>
      <div className={AboutStyles.aboutGroup}>
        <div className={AboutStyles.cardGroup}>
          <div>
            <h1>1</h1>
            <h4>Card 1</h4>
            <p>This is just sample text for now</p>
          </div>
          <div>
            <h1>2</h1>
            <h4>Card 2</h4>
            <p>This is just sample text for now</p>
          </div>
          <div>
            <h1>3</h1>
            <h4>Card 3</h4>
            <p>This is just sample text for now</p>
          </div>
        </div>
        <div className={AboutStyles.largeCircle}></div>
        <div className={AboutStyles.descGroup}>
          <p>RB Dream - Kikinda</p>
          <h1>
            We are the best<br></br>
            <span>in your city</span>
          </h1>
          <p>
            We are here to help you. We care about our craft. We only work with
            top suppliers! Come and see us anytime in store.
          </p>
          <Link to="/contact">Get in Touch</Link>
        </div>
        <div className={AboutStyles.globeOuter}></div>
        <div className={AboutStyles.globeInner}></div>
        <div className={AboutStyles.smallOrbit}></div>
        <div className={AboutStyles.largeOrbit}></div>
      </div>
    </Layout>
  )
}

export default AboutPage
