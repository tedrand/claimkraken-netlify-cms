import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
// import { FacebookProvider, CommentsCount } from 'react-facebook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  // faComment,
  faCalendar,
  faClock
} from '@fortawesome/free-solid-svg-icons'
// import TwitterTimeline from '../components/TwitterTimeline'
import TagList from '../components/TagList'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => (
      <div className="card mb-2 row" key={post.node.id}>
        <div className="row">
          {post.node.frontmatter.featuredimage ? (
            <div className="col-md-4 card-preview-img">
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.node.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${post.node.frontmatter.title}`,
                }}
                style={{
                  marginTop: '1em'
                }}
              />
            </div>
          ) : null}
          <div className="col-md-8">
            <Link
              className="card-link"
              to={post.node.fields.slug}
            >
              <div className="card-body">
                <h6><b>{post.node.frontmatter.title}</b></h6>
                <p className="card-text">
                  <small className="text-muted blogroll-smallmatter">
                    <FontAwesomeIcon icon={faCalendar} size="1x" />&nbsp;{`${post.node.frontmatter.date}`}
                    {/* &nbsp;&nbsp;&nbsp;
                    <FacebookProvider appId="433938334407184">
                      <div className="comment-count"><FontAwesomeIcon icon={faComment} size="1x" />&nbsp;<CommentsCount href={`https://www.claimkraken.com${post.node.fields.slug}`} /></div>
                    </FacebookProvider> */}
                    &nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faClock} size="1x" />&nbsp;{`${post.node.fields.readingTime.text}`}
                  </small><br />
                  <small>
                    {post.node.frontmatter.description}
                  </small>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'
      } tagged with “${tag}”`

    return (
      <Layout>
        <section>
          <Helmet title={`${tag} | ${title}`} />
          <div>
            <h3>{tagHeader}</h3>
            <div className="row">
              <div className="col-md-8 mt-3">
                {postLinks}
                <div className="d-flex">
                  <Link className="btn btn-block btn-secondary flex-grow-1" to="/tags/">
                    Browse all tags
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mt-3">
                {/* <TwitterTimeline /> */}
                <TagList />
                {/* <h2>About the Author</h2> */}
                {/* <div className="card mb-3" style={{
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
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
