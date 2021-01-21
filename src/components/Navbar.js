import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faBook,
  faEnvelope,
  faEnvelopeSquare,
  faGavel,
  faHome,
  faMicrophone,
  faPortrait,
  faUniversity
} from '@fortawesome/free-solid-svg-icons'

// import Search from '../components/Search'

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
          <nav id="topNav" className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#292b2c' }}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <FontAwesomeIcon icon={faHome} size="1x" />&nbsp;ClaimKraken
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <button className="btn btn-link nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                      <FontAwesomeIcon icon={faBook} size="1x" />&nbsp;Topics
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/tags/federal-circuit/">
                        <FontAwesomeIcon icon={faGavel} size="1x" />&nbsp;Federal Circuit
                      </Link>
                      <Link className="dropdown-item" to="/tags/learning-modules/">
                        <FontAwesomeIcon icon={faUniversity} size="1x" />&nbsp;Learning Modules
                      </Link>
                      {/* <li><hr className="dropdown-divider" /></li> */}
                      {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tags/interviews/"><FontAwesomeIcon icon={faMicrophone} size="1x" />&nbsp;Interviews</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      <FontAwesomeIcon icon={faPortrait} size="1x" />&nbsp;About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      <FontAwesomeIcon icon={faEnvelope} size="1x" />&nbsp;Contact
                    </Link>
                  </li>
                </ul>
                <ul className="ml-auto navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" aria-label="Twitter Icon" href="https://twitter.com/ClaimKraken"><FontAwesomeIcon icon={faTwitter} size="1x" /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-label="LinkedIn Icon" href="https://www.linkedin.com/company/claimkraken"><FontAwesomeIcon icon={faLinkedinIn} size="1x" /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-label="Github Icon" href="https://github.com/tedrand/claimkraken-netlify-cms"><FontAwesomeIcon icon={faGithub} size="1x" /></a>
                  </li>
                  {/* <Search searchIndex={data.siteSearchIndex.index} /> */}
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
