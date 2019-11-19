import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import TableCell from "../components/pricingTable"
import Data from "../../pricing.json"
import storeStyles from "./store.module.scss"

const StorePets = () => {
  return (
    <Layout>
      <Head title="Gardening Store"></Head>
      <div className={storeStyles.tableGroup}>
        {Data.pets.map(cell => (
          <TableCell
            price={cell.price}
            title={cell.title}
            image={cell.image}
          ></TableCell>
        ))}
      </div>
    </Layout>
  )
}

export default StorePets
