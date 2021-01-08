import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="row">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="card mb-2" key={post.id}>
              <div className="row">
                {post.frontmatter.featuredimage ? (
                  <div className="col-md-4">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
                <div className="col-md-8">
                  <div className="card-body">
                    <Link
                      className="card-title"
                      to={post.fields.slug}
                    >
                      <h4>{post.frontmatter.title}</h4>
                    </Link>
                    <p className="card-text">
                      <small className="text-muted">
                        {post.frontmatter.date}
                      </small><br />
                      {post.frontmatter.description}
                    </p>
                    <p className="card-text">
                      <Link className="btn btn-primary" to={post.fields.slug}>
                        Keep Reading →
                        </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
