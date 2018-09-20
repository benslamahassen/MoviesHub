import React from 'react'
import Prismic from 'prismic-javascript'

import Layout from '../components/layout'
import config from '../../config.json'

const apiEndpoint = config.apiEndpoint
const apiToken = config.accessToken

class Movie extends React.Component {
  state = { fetched: false }
  fetchMovie() {
    console.log('hee')
    let movieUid = new URL(this.props.location.href).searchParams.get('uid')
    Prismic.getApi(apiEndpoint, { accessToken: apiToken })
      .then(api => {
        api.getByUID('movie', movieUid).then(res => {
          this.setState({ movie: res.data, fetched: true })
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    if (!this.state.fetched && this.props.location.href) this.fetchMovie()
    const movie = this.state.movie
    let movieData = 'Loding...'
    if (movie) {
      movieData = (
        <div className="row p-3">
          <div className="col-6">
            <img src={movie.poster.url} alt="" />
          </div>
          <div className="col-6">
            <h3>{movie.title[0].text}</h3>
            <p>{movie.description[0].text}</p>
          </div>
        </div>
      )
    }
    return <Layout>{movieData}</Layout>
  }
}

export default Movie
