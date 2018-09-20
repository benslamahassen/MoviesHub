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
						maxHeight: '50px'
          }}
          className="mr-3"
        >
          {siteTitle}
        </Link>
        <div>
          <Link
            to="/search/"
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
            to="/about/"
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
