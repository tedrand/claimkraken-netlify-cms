import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TermsOfUsePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <h1 className="pb-4">
        {title}
      </h1>
      <PageContent className="content" content={content} />
    </div>
  )
}

TermsOfUsePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TermsOfUsePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TermsOfUsePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

TermsOfUsePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TermsOfUsePage

export const termsOfUsePageQuery = graphql`
  query TermsOfUsePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
