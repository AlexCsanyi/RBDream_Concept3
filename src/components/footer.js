import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import footerStyles from "./footer.module.scss"
import { FaFacebook } from "react-icons/fa"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }

      allContentfulLink(sort: { fields: [createdAt] }) {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>
        Post: "Love RB Dream, Kikinda" <br></br>Visit Store!
      </p>
      <button>
        <FaFacebook></FaFacebook>Post
      </button>
      <div className={footerStyles.footerLinkGroup}>
        {data.allContentfulLink.edges.map(edge => (
          <Link to={edge.node.url}>{edge.node.title}</Link>
        ))}
      </div>
      <p>Created by {data.site.siteMetadata.author} - © 2019</p>
    </footer>
  )
}

export default Footer
