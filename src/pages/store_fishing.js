import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import TableCell from "../components/pricingTable"
import Data from "../../pricing.json"

const StoreFishing = () => {
  return (
    <Layout>
      <Head title="Fishing Store"></Head>
      <div>
        {Data.fishing.map(cell => (
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

export default StoreFishing