import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
// import { FacebookProvider, CommentsCount } from 'react-facebook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  // faComment,
  faCalendar,
  faClock
} from '@fortawesome/free-solid-svg-icons'

class FeatureCarousel extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="row">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="card mb-2" key={post.id}>
              <div className="row">
              <div className="col-md-8">
                  <Link
                    className="card-link"
                    to={post.fields.slug}
                  >
                    <div className="card-body">
                      <h6><b>{post.frontmatter.title}</b></h6>
                      <p className="card-text">
                        <small className="text-muted blogroll-smallmatter">
                          <FontAwesomeIcon icon={faCalendar} size="1x" />&nbsp;{`${post.frontmatter.date}`}
                          {/* &nbsp;&nbsp;&nbsp;
                            <FacebookProvider appId="1044466529374649">
                              <div className="comment-count"><FontAwesomeIcon icon={faComment} size="1x" />&nbsp;<CommentsCount href={`https://www.claimkraken.com${post.fields.slug}`} /></div>
                            </FacebookProvider> */}
                            &nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faClock} size="1x" />&nbsp;{`${post.fields.readingTime.text}`}
                        </small><br />
                        <small>
                          {post.frontmatter.description}
                        </small>
                      </p>
                    </div>
                  </Link>
                </div>
                {post.frontmatter.featuredimage ? (
                  <div className="col-md-4 card-preview-img">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                      style={{
                        marginTop: '1em'
                      }}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
      </div>
    )
  }
}

FeatureCarousel.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
        query FeatureCarouseQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { 
                frontmatter: { 
                    templateKey: { eq: "blog-post" } 
                    featuredpost: { eq: true }
                } 
            }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                  readingTime {
                    text
                  }
                }
                frontmatter {
                  title
                  description
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
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
      `}
    render={(data, count) => <FeatureCarousel data={data} count={count} />}
  />
)