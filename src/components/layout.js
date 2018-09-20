import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import { Link } from 'gatsby';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'All movies in one place' },
            { name: 'keywords', content: 'movies, series, documentaries' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
				<footer style={{backgroundColor:'#ee6e73'}} className="p-4">
          <div className="container">
            <div className="row">
              <div className="col">
                <h5 className="text-white">MoviesHub</h5>
                <p>We rock! Big Time! Check us out! now or never!</p>
              </div>
              <div className="col-4 ml-auto">
                <h5 className="text-white">Our associates</h5>
                <ul className='list-unstyled text-center'>
                  <li><Link to='/404/' className="text-secodary">CodeHub</Link></li>
                  <li><Link to='/404/' className="text-secodary">FoodHub</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-white">
            <div className="container text-center">
            © 2018 Copyright HBS
            </div>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
