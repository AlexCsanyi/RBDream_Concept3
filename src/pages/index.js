import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Card from "../components/card"

import homeStyles from "./index.module.scss"
import thumbFishing from "../images/thumbFishing.jpg"
import thumbGarden from "../images/thumbGarden.jpg"
import thumbPets from "../images/thumbPets.jpg"
import thumbTicket from "../images/thumbTicket.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"></Head>
      <div className={homeStyles.home}>
        <h1>Welcome to RB Dream!</h1>
        <h3>
          Discover a world filled with a wide range of high quality products
          from top suppliers and well konwn brands.
        </h3>
        <div>
          <h3>See what's in store</h3>
        </div>
        <Card
          title="Fishing"
          text="Rods, reels, baits & more"
          image={thumbFishing}
          alt="Fishing rod and reel in front of a lake"
        ></Card>
        <Card
          title="Pets"
          text="Pet food, grooming, toys, collars & more"
          image={thumbPets}
          alt="Woman is petting a Labrador dog"
        ></Card>
        <Card
          alt="Gardening tools and soil"
          title="Garden"
          text="Seeds & tools"
          image={thumbGarden}
        ></Card>
        <Card
          title="Licence"
          text="Get your fishing licence in store"
          image={thumbTicket}
          alt="A wooden sign with tickets written on it"
        ></Card>
        <p>
          Want to get in touch?{" "}
          <Link className={homeStyles.link} to="/contact">
            Contact us
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
