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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"/>
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
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
    </div>
  )
}

export default TemplateWrapper
