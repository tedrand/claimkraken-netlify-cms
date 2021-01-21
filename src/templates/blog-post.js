import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
// import { FacebookProvider, Comments } from 'react-facebook'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ShareButtons from '../components/ShareButtons'
// import TwitterTimeline from '../components/TwitterTimeline'
import TagList from '../components/TagList'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  author,
  date,
  description,
  tags,
  title,
  slug,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  const pageUrl = `https://www.claimkraken.com${slug}`

  return (
    <section className="container row">
      <div className="col-md-8 mt-3">
        {helmet || ''}
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
          {title}
        </h1>
        <p>Date Published: {date}</p>
        <small>Author: {author}</small>
        <br /><br />
        {/* <p>{description}</p> */}
        <ShareButtons title={title} url={pageUrl} />
        <hr />
        <PostContent className="post-content" content={content} />
        {tags && tags.length ? (
          <div style={{ marginTop: `4rem` }}>
            <h3>Tags</h3>
            <ul className="nav">
              {tags.map((tag) => (
                <li className="nav-item" key={tag + `tag`}>
                  <Link className="nav-link" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {/* <hr />
        <FacebookProvider appId="1044466529374649">
          <Comments href={`https://www.claimkraken.com${slug}`} />
        </FacebookProvider> */}
      </div>
      <div className="col-md-4 mt-3">
        {/* <TwitterTimeline /> */}
        <TagList />
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  author: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(post.fields.slug)
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
        description={post.frontmatter.description}
        slug={post.fields.slug}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={`${post.frontmatter.title}`} />
            <meta property="og:description" content={`${post.frontmatter.description}`} />
            <meta property="og:url" content={`https://www.claimkraken.com${post.fields.slug}`} />
            <meta property="og:site_name" content="ClaimKraken.com | Patents &amp; Patent Law" />
            <meta property="og:image" content={`https://www.claimkraken.com${post.frontmatter.featuredimage.childImageSharp.fixed.src}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        description
        tags
        featuredimage {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`