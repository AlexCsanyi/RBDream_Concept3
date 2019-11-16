import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <div className={headerStyles.headerGroup}>
      <header>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/"
              >
                <p>01.</p>
                <h3>Home</h3>
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/blog"
              >
                <p>02.</p>
                <h3>Blog</h3>
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/about"
              >
                <p>03.</p>
                <h3>About</h3>
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/contact"
              >
                <p>04.</p>
                <h3>Contact</h3>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
