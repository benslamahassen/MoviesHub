import React from 'react'
import Prismic from 'prismic-javascript'

import Layout from '../components/layout'
import config from '../../config.json'

const apiEndpoint = config.apiEndpoint
const apiToken = config.accessToken

class Movie extends React.Component {
  componentDidMount() {
    let movieUid = new URL(this.props.location.href).searchParams.get('uid')
    Prismic.getApi(apiEndpoint, { accessToken: apiToken })
      .then(api => {
        api.getByUID('movie', movieUid).then(res => {
          console.log(res)
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <Layout>
        {new URL(this.props.location.href).searchParams.get('uid')}
      </Layout>
    )
  }
}

export default Movie
