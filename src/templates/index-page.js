import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div className="heading">
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
    <div className="row">
      <div className="col-md-8 mt-3">
        <h2>Latest Stories</h2>
        <hr />
        <BlogRoll />
        <div className="d-flex">
          <Link className="btn btn-block btn-secondary flex-grow-1" to="/blog">
            Read more
          </Link>
        </div>
      </div>
      <div className="col-md-4 mt-3">
        <h2>About the Author</h2>
        <div className="card mb-3" style={{
          width: '100%',
          backgroundColor: '#f8f9fA'
        }}>
          <img src="/img/headshot.png"
            className="card-img-top p-1"
            alt="headshot"
            style={{
              maxWidth: '40%',
              display: 'block',
              margin: 'auto',
              borderRadius: '50%',
              filter: 'grayscale(100%)'
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Theodore Rand</h5>
            <p className="card-text">I'm a law student and USPTO Registered Patent Agent.</p>
            <a href="/about" className="btn btn-primary">Learn more About the Site</a>
          </div>
        </div>
        <a
          href="https://twitter.com/ClaimKraken?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-size="large"
          data-width="100%"
          data-show-count="true">
          Follow @ClaimKraken
        </a>
        <a
          className="twitter-timeline"
          href="https://twitter.com/ClaimKraken?ref_src=twsrc%5Etfw"
          data-theme="dark"
          data-width="100%"
          data-height="500">
          Tweets by ClaimKraken
        </a>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
