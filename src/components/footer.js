import React from 'react'

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: '#ee6e73', maxHeight: '200px' }}
      className="p-4"
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-white">MoviesHub</h5>
            <h4>We rock! Big Time! Check us out! now or never!</h4>
          </div>
          <div className="col-4 ml-auto">
            <h5 className="text-white">Our associates</h5>
            <ul className="list-unstyled text-center">
              <li>
                  <h5>CodeHub</h5>
              </li>
              <li>
                  <h5>FoodHub</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-white">
        <h4 className="container text-center">© 2018 Copyright HBS</h4>
      </div>
    </footer>
  )
}

export default Footer
