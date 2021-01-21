import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import CookieConsent from 'react-cookie-consent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title } = useSiteMetadata()

  useEffect(() => {
    if (window.twttr) {
      if (typeof window.twttr.widgets !== 'undefined') {
        window.twttr.widgets.load()
      }
    }
  })

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <link href="/bootstrap.min.css" rel="stylesheet"></link>
        <link href="/all.css" rel="stylesheet" />
      </Helmet>
      <Navbar />
      <div className="container mt-3 mb-3">
        {children}
      </div>
      <Footer />
      <CookieConsent
        style={{
          backgroundColor: "teal"
        }}
        location="bottom"
        buttonText="Accept"
        // declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics">
        This site uses cookies. Please check out our
         <a href="/privacy-policy"> Privacy Policy </a>
        for more information.
      </CookieConsent>
      <script src="/bootstrap.min.js"></script>
    </div>
  )
}

export default TemplateWrapper
