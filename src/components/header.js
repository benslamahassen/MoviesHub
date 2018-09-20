import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#ee6e73',
    }}
  >
    <div
      style={{
        padding: '0.5rem 2rem',
      }}
    >
      <div className='row justify-content-between align-items-center'>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '2rem',
          }}
          className="mr-3"
        >
          {siteTitle}
        </Link>
        <div>
          <Link
            to="/page-2/"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.3rem',
            }}
            className="mr-3"
          >
            Search
          </Link>
          <Link
            to="/page-3/"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.3rem',
            }}
            className="mr-3"
          >
            Favorites
          </Link>
          <Link
            to="/page-4/"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.3rem',
            }}
            className="mr-3"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Header
