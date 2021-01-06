import React from 'react'
import { Helmet } from 'react-helmet'
import CookieConsent from 'react-cookie-consent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
// import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
      </Helmet>
      <div className="jumbotron">
        <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >{title}</h1>
        <h2 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >A Hub for Patent Law News</h2>
      </div>
      <Navbar />
      <div>{children}</div>
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
    </div>
  )
}

export default TemplateWrapper
