import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import TwitterTimeline from '../../components/TwitterTimeline'
import TagList from '../../components/TagList'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container row">
          <div className="col-md-9">
            <h4>Latest Stories</h4>
            <hr/>
            <BlogRoll />
          </div>
          <div className="col-md-3">
            <TwitterTimeline />
            <TagList />
          </div>
        </div>
      </Layout>
    )
  }
}
