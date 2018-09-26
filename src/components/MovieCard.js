import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'

const MovieCard = props => {
  return (
    <Link className='movie__card' key={props.index} to={'/movie?uid=' + props.uid}>
      <div className="card shadow m-4 mx-3" style={{ width: '18rem' }}>
        <img className="card-img-top" src={props.poster} alt="Movie" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text text-truncate">{props.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
