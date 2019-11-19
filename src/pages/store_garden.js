import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import TableCell from "../components/pricingTable"
import Data from "../../pricing.json"
import storeStyles from "./store.module.scss"

const StoreGarden = () => {
  return (
    <Layout>
      <Head title="Gardening Store"></Head>
      <div className={storeStyles.tableGroup}>
        {Data.garden.map(cell => (
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

export default StoreGarden
