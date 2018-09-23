import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <div className="site">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="content">{children}</div>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
