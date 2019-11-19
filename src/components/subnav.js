import React from "react"
import { Link } from "gatsby"
import SubnavStyles from "./subnav.module.scss"

import { GiFishingHook, GiTreeBranch } from "react-icons/gi"
import { MdPets } from "react-icons/md"
import { FaIdCard } from "react-icons/fa"

const Subnav = props => {
  return (
    <div className={SubnavStyles.subnavGroup}>
      <div>
        <span>
          <GiFishingHook></GiFishingHook>1
        </span>
        <Link
          activeClassName={SubnavStyles.activeSubnavItem}
          to="/store_fishing"
        >
          Fishing
        </Link>
      </div>
      <div>
        <span>
          <MdPets></MdPets> 2
        </span>
        <Link activeClassName={SubnavStyles.activeSubnavItem} to="/store_pets">
          Pets
        </Link>
      </div>
      <div>
        <span>
          <GiTreeBranch></GiTreeBranch> 3
        </span>
        <Link
          activeClassName={SubnavStyles.activeSubnavItem}
          to="/store_garden"
        >
          Garden
        </Link>
      </div>
      <div>
        <span>
          <FaIdCard></FaIdCard> 4
        </span>
        <Link
          activeClassName={SubnavStyles.activeSubnavItem}
          to="/store_licences"
        >
          Licence
        </Link>
      </div>
    </div>
  )
}

export default Subnav
