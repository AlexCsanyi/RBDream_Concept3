import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  )
}

export default ContactPage
