import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'

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
          <h2 className='m-0 p-0'>{siteTitle}</h2>
        </Link>
        <h5 className='m-0 p-0 font-weight-normal'>
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
        </h5>
      </div>
    </div>
  </div>
)

export default Header
