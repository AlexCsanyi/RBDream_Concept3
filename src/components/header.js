import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.png"
import LogoBlack from "../images/logoBlack.png"

import headerStyles from "./header.module.scss"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={
          this.state.hasScrolled
            ? headerStyles.headerGroupScrolled
            : headerStyles.headerGroup
        }
      >
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
                <Link to="/">
                  <img
                    className={headerStyles.logo}
                    alt="RB Dream Logo"
                    src={this.state.hasScrolled ? LogoBlack : Logo}
                  ></img>
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
}

export default Header
