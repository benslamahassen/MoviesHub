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
      <div className="row justify-content-between align-items-center">
        <Link to="/" className="mr-3 text-white">
          <h2 className="m-0 p-0">{siteTitle}</h2>
        </Link>
        <h5 className="m-0 p-0 font-weight-normal">
          <Link to="/search/" className="mr-3 text-white">
            Search
          </Link>
          <Link to="/browse/" className="mr-3 text-white">
            Browse
          </Link>
        </h5>
      </div>
    </div>
  </div>
)

export default Header
