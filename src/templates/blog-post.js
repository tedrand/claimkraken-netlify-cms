import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import useSiteMetadata from '../components/SiteMetadata'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ShareButtons from '../components/ShareButtons'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  author,
  id,
  description,
  slug,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  const { siteUrl } = useSiteMetadata()
  const pageUrl = `${siteUrl}/blog/${slug}`
  let disqusConfig = {
    url: pageUrl,
    identifier: id,
    title: title,
  }
  const shareUrl = pageUrl
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>Date Created: {date}</p>
            <small>Author: {author}</small>

            <br /><br />
            {/* <p>{description}</p> */}
            {/* <div>
              <ShareButtons title={title} url={shareUrl} />
            </div> */}
            <hr />
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
  id: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  const { siteUrl } = useSiteMetadata()
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
        id={post.id}
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
            <meta property="og:url" content={`${siteUrl}/blog/${post.fields.slug}`} />
            <meta property="og:site_name" content="ClaimKraken.com | Patents &amp; Patent Law" />
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
      }
    }
  }
`
