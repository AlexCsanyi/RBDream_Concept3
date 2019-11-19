import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import TableCell from "../components/pricingTable"
import Data from "../../pricing.json"
import storeStyles from "./store.module.scss"
import Subnav from "../components/subnav"
import { MdPets } from "react-icons/md"

const StorePets = () => {
  return (
    <Layout>
      <Head title="Gardening Store"></Head>
      <Subnav></Subnav>
      <div className={storeStyles.subTitle}>
        <h4 className={storeStyles.subTitle}>
          <sup>
            <MdPets></MdPets>
          </sup>
          Pets
        </h4>
      </div>
      <div className={storeStyles.tableGroup}>
        {Data.pets.map(cell => (
          <TableCell
            price={cell.price}
            title={cell.title}
            image={cell.image}
            key={cell.title}
          ></TableCell>
        ))}
      </div>
    </Layout>
  )
}

export default StorePets
