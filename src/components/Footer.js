import React from 'react'
import { Link } from 'gatsby'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="jumbotron">
        <div className="row navbar navbar-dark text-center">
          <ul className="col-md-6 navbar-nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
                  </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
                </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/admin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Admin
                </a>
            </li>
          </ul>
            <ul className="col-md-6 navbar-nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/terms-of-use">
                  Terms of Use
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
