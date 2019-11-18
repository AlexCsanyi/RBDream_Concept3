import React from "react"
import TableStyles from "./pricingTable.module.scss"

const TableCell = props => {
  return (
    <div className={TableStyles.cellGroup}>
      <img
        alt={props.title}
        src={require(`../images/product_pages_images/${props.image}`)}
      ></img>
      <div>{props.title}</div>
      <div>{props.price}</div>
    </div>
  )
}

export default TableCell
