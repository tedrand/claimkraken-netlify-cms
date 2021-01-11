import React from 'react'
import { StaticQuery, Link } from 'gatsby'
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'

import Search from '../components/Search'

const navQuery = graphql`
query SearchIndexQuery {
  siteSearchIndex {
    index
  }
}`


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <StaticQuery
        query={navQuery}
        render={data => (
          <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#006D6F' }}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                ClaimKraken
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/blog">Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
                  </li>
                </ul>
                <ul className="ml-auto navbar-nav">
                  <Search searchIndex={data.siteSearchIndex.index} />
                </ul>
              </div>
            </div>
          </nav>
        )}
      />
    )
  }
}

export default Navbar
