import React from 'react'
import { Link } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/layout'
import Prismic from 'prismic-javascript'
import { UncontrolledCarousel } from 'reactstrap'
import config from '../../config.json';

const apiEndpoint =  config.apiEndpoint;
const apiToken = config.accessToken;
class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { movies: [] }
  }

  UNSAFE_componentWillMount() {
    Prismic.getApi(apiEndpoint, { accessToken: apiToken })
      .then(api => {
        Promise.resolve(api.query('')).then(res => {
          let movies = []
          res.results.map(movie => {
            return movies.push({
              src: movie.data.poster.url,
              caption: movie.data.title[0].text,
              description: movie.data.description[0].text,
              uid: movie.uid,
            })
          })
          console.log(movies)
          this.setState({
            movies,
          })
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    let moviesCards = 'Loading Movies...'
    let carosel = 'Loading Images ! ...'
    if (this.state.movies.length > 0) {
      carosel = (
        <UncontrolledCarousel
          style={{ maxHeight: '100px' }}
          items={this.state.movies}
          controls={false}
          indicators={false}
          autoPlay={true}
          interval={3000}
          pause={'hover'}
        />
      )
      moviesCards = this.state.movies.map((movie, index) => {
        return (
          <Link key={index} to={'/movie?uid='+movie.uid}>
            <div className="card shadow m-4 mx-3" style={{ width: '18rem' }}>
              <img className="card-img-top" src={movie.src} alt="Movie" />
              <div className="card-body">
                <h5 className="card-title">{movie.caption}</h5>
                <p className="card-text text-truncate">{movie.description}</p>
              </div>
            </div>
          </Link>
        )
      })
    }
    return (
      <Layout>
        {carosel}
        <div className="row p-0 m-0 justify-content-around align-items-center px-2 flex-wrap">
          {moviesCards}
        </div>
      </Layout>
    )
  }
}

export default IndexPage
