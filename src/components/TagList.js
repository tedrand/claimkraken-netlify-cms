import React from 'react'
import { kebabCase } from 'lodash'
import { Link, graphql, StaticQuery } from 'gatsby'

class TagList extends React.Component {
    render() {
        const { group: tags } = this.props.data.allMarkdownRemark
        tags.sort(function (a, b) {
            return b.totalCount - a.totalCount;
        })
        return (
            <div>
                <h3>Tags</h3>
                <hr />
                <div>
                    <ul className="nav flex-column">
                        {tags.map((tag) => (
                            <li className="nav-item" key={tag.fieldValue}>
                                <Link className="nav-link tag-link" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                    {tag.fieldValue} ({tag.totalCount})
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

// TagList.propTypes = {
//     data: PropTypes.shape({
//         allMarkdownRemark: PropTypes.array
//     }),
// }

export default () => (
    <StaticQuery
        query={graphql`
            query TagListQuery {
                allMarkdownRemark(limit: 1000) {
                    group(field: frontmatter___tags) {
                      fieldValue
                      totalCount
                    }
                }
            }
        `}
        render={(data, count) => <TagList data={data} count={count} />}
    />
)