import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import TableCell from "../components/pricingTable"
import Data from "../../pricing.json"
import Subnav from "../components/subnav"
import { GiFishingHook } from "react-icons/gi"

import storeStyles from "./store.module.scss"

const StoreFishing = () => {
  return (
    <Layout>
      <Head title="Fishing Store"></Head>
      <Subnav></Subnav>
      <div className={storeStyles.subTitle}>
        <h4>
          <sup>
            <GiFishingHook></GiFishingHook>
          </sup>
          Fishing
        </h4>
      </div>
      <div className={storeStyles.tableGroup}>
        {Data.fishing.map(cell => (
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

export default StoreFishing
