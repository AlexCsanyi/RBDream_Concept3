import React from "react"
import Layout from "../components/layout"

import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title='Contact'></Head>
      <h1>Contact RB Dream</h1>
      <p>email: info@rbdream.com</p>
      <p>
        You can visit our facebook page:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/radoslavbarbulrale/"
        >
          @radoslavbarbulrale
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
