import React from "react"
import TableStyles from "./pricingTable.module.scss"

const TableCell = props => {
  return (
    <div className={TableStyles.cellGroup}>
      <img
        alt={props.title}
        src={require(`../images/product_pages_images/${props.image}`)}
      ></img>
      <div className={TableStyles.cellTitle}>{props.title}</div>
      <div>{`£${props.price} GBP`}</div>
    </div>
  )
}

export default TableCell
