import React from 'react'
import Movie from '../components/MovieCard'
import Layout from '../components/layout'
import Prismic from 'prismic-javascript'
import { UncontrolledCarousel } from 'reactstrap'
import LazyLoad from 'react-lazyload'
import config from '../../config.json'
import 'bootstrap/dist/css/bootstrap.min.css'

const apiEndpoint = config.apiEndpoint
const apiToken = config.accessToken
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
    let moviesCards = <div className="lds-dual-ring" />
    let carosel = ''
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
          <LazyLoad>
            <Movie
              key={index}
              uid={movie.uid}
              poster={movie.src}
              title={movie.caption}
              description={movie.description}
            />
          </LazyLoad>
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
