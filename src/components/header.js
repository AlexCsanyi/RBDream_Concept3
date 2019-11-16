import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <div className={headerStyles.headerGroup}>
      <header>
        <nav className={headerStyles.nav} role="navigation">
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

        <nav className={headerStyles.mobileMenu} role="navigation">
          <div className={headerStyles.toggle}>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className={headerStyles.mobileNavList}>
              <li>
                <Link
                  className={headerStyles.mobileNavItem}
                  activeClassName={headerStyles.mobileActiveNavItem}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={headerStyles.mobileNavItem}
                  activeClassName={headerStyles.mobileActiveNavItem}
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={headerStyles.mobileNavItem}
                  activeClassName={headerStyles.mobileActiveNavItem}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={headerStyles.mobileNavItem}
                  activeClassName={headerStyles.mobileActiveNavItem}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
