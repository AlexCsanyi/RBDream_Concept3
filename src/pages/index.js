import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Card from "../components/card"
import CardFullWidth from "../components/cardFullWidth"

import homeStyles from "./index.module.scss"
import thumbFishing from "../images/thumbFishing.jpg"
import thumbGarden from "../images/thumbGarden.jpg"
import thumbPets from "../images/thumbPets.jpg"
import thumbTicket from "../images/thumbTicket.jpg"
import productImgOne from "../images/1.png"
import productImgTwo from "../images/2.png"
import productImgThree from "../images/product3.png"
import productImgFour from "../images/product4.png"
import productImgFive from "../images/product5.png"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"></Head>
      <div className={homeStyles.home}>
        <div className={homeStyles.welcome}>
          <h1>Welcome to RB Dream!</h1>
          <hr className={homeStyles.yellowLine}></hr>
          <h3>
            Discover a world filled with a wide range of high quality products
            from top suppliers and well konwn brands.
          </h3>
        </div>
        <div>
          <div className={homeStyles.cardGroup}>
            <h4>
              <sup>01</sup>Store
            </h4>
            <Link to="/store_fishing">
              <Card
                title="Fishing"
                text="Rods, reels, baits & more"
                image={thumbFishing}
                alt="Fishing rod and reel in front of a lake"
              ></Card>
            </Link>
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
          </div>
        </div>
        <div className={homeStyles.section}>
          <h4 className={homeStyles.featured}>
            <sup>02</sup>Featured
          </h4>
          <CardFullWidth
            name="PENN SPINFISHER V"
            title="Penn’s Spinfisher rocks a solid 5+1 bearing system"
            text="It features a sealed drag system which is a cool innovation that prevents corrosion and failure of the drag system over time due to water contamination..."
            image={productImgOne}
            alt="PENN SPINFISHER V fishing reel"
          ></CardFullWidth>
          <CardFullWidth
            name="SHIMANO STRADIC FK"
            className="right"
            title="Versatile enough to meet just about any need."
            text="Shimano has centered these reels around their X-Ship technology which is aimed at improving the durability and longevity of the internal drive system..."
            image={productImgTwo}
            alt="SHIMANO STRADIC FK fishing reel"
          ></CardFullWidth>
          <CardFullWidth
            name="KASTKING VALIANT EAGLE"
            title="Solid aluminum reel with a machined spool"
            text="With a 10+1 bearing system and up to 22lbs of drag, you’ll want to consider this reel if you like long fights with heavy fish. They’ve aimed this reel directly at the saltwater crowd seeking serious power and control..."
            image={productImgThree}
            alt="KASTKING VALIANT EAGLE fishing reel"
          ></CardFullWidth>
          <CardFullWidth
            name="Pflueger President"
            className="right"
            title="It’s a lightweight, nimble reel for those that like a quick cast"
            text="There’s something that really does feel presidential about the presentation of this graphite body spinning reel. With silver, gold, and blue anodization it almost says “executive” right on it..."
            image={productImgFour}
            alt="Pflueger President fishing reel"
          ></CardFullWidth>
          <CardFullWidth
            name="Okuma Ceymar Lightweight"
            title="Anti-reverse reel and 7+1 ball bearing system"
            text="With an oiled felt drag system, there’s not much to worry about with corrosion and the maximum drag pressure of 5lbs should warn you that this reel won’t be for landing the type of fish you might handle with something like the KastKing Kodiak..."
            image={productImgFive}
            alt="Okuma Ceymar Lightweight fishing reel"
          ></CardFullWidth>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
