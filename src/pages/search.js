import React from 'react'
import Layout from '../components/layout'
import config from '../../config.json'
import Prismic from 'prismic-javascript'
import Movie from '../components/MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css'

const apiEndpoint = config.apiEndpoint
const apiToken = config.accessToken

class Search extends React.Component {
  state = { key: '' }

  searchHandler = async e => {
    await this.setState({ key: e.target.value })
    console.log(this.state.key)
    Prismic.getApi(apiEndpoint, { accessToken: apiToken })
      .then(api => {
        api
          .query([
            Prismic.Predicates.at('document.type', 'movie'),
            Prismic.Predicates.fulltext('document', this.state.key),
          ])
          .then(res => {
            let movies = []
            res.results.map(movie => {
              return movies.push({
                poster: movie.data.poster.url,
                title: movie.data.title[0].text,
                description: movie.data.description[0].text,
                uid: movie.uid,
              })
            })
            console.log(movies)
            this.setState({ movies: movies })
          })
      })
      .catch(err => console.log(err))
  }
  render() {
    const movies = this.state.movies
    let moviesCards = (
      <h3 className="text-center my-4 w-100">Search a Movie...</h3>
    )
    if (movies && movies.length >= 0) {
      moviesCards = movies.map((movie, index) => {
        return (
          <Movie
            key={index}
            uid={movie.uid}
            poster={movie.poster}
            title={movie.title}
            description={movie.description}
          />
        )
      })
      if (movies.length === 0) {
        moviesCards = (
          <h2 className="text-center my-5 w-100">No Movies Found. <br></br>Try to be more accurate :)</h2>
        )
      }
    }
    return (
      <Layout>
        <div className="row m-0 p-0 justify-content-around align-items-center">
          <input
            value={this.state.key}
            className="form-control mx-5 p-2 my-3"
            placeholder="Type Movie Name"
            onChange={this.searchHandler}
          />
          {moviesCards}
        </div>
      </Layout>
    )
  }
}

export default Search
