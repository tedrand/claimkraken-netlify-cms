import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import FeatureCarousel from '../components/FeatureCarousel'
import BlogRoll from '../components/BlogRoll'
import TwitterTimeline from '../components/TwitterTimeline'
import TagList from '../components/TagList'

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
    <div className="row">
      <div className="col-md-9">
        <h3>Blog Posts</h3>
        <hr />
        <h4>Featured Posts</h4>
        <FeatureCarousel />
        <hr /><br/>
        <h4>Other Recent Posts</h4>
        <BlogRoll />
        <div className="d-flex">
          <Link className="btn btn-block btn-secondary flex-grow-1" to="/blog">
            See All Blog Posts
          </Link>
        </div>
      </div>
      <div className="col-md-3">
        {/* <TwitterTimeline /> */}
        <TagList />
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
      <Helmet titleTemplate="%s | Blog">
            <title>{`ClaimKraken.com`}</title>
            <meta
              name="description"
              content={`ClaimKraken.com: Patent News Now`}
            />
      </Helmet>
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
          markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
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
