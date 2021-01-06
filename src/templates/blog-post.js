import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import { globalHistory } from "@reach/router"
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ShareButtons from '../components/ShareButtons'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  author,
  date,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  const pageUrl = `https://www.claimkraken.com${globalHistory.location.pathname}`
  console.log(pageUrl);
  let disqusConfig = {
    url: pageUrl,
    identifier: pageUrl,
    title: title,
  }
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>Date Published: {date}</p>
            <small>Author: {author}</small>
            <br/><br/>
            {/* <p>{description}</p> */}
            <ShareButtons title={title} url={pageUrl} />
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <CommentCount config={disqusConfig} placeholder={'...'} />
            <Disqus config={disqusConfig} />
          </div>
        </div>
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
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
        description={post.frontmatter.description}
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
            <meta property="og:url" content={`https://www.claimkraken.com${globalHistory.location.pathname}`} />
            <meta property="og:site_name" content="ClaimKraken.com | Patents &amp; Patent Law" />
            <meta property="og:image" content={`${post.frontmatter.featuredimage.childImageSharp.fixed.src}`} />
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