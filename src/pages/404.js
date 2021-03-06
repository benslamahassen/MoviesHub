import React from 'react'
import Layout from '../components/layout'
import '../styles/404.css'
//import 'bootstrap/dist/css/bootstrap.min.css'

const NotFoundPage = () => (
  <Layout>
    <div class="error-page pt-5">
      <div>
        <h1 data-h1="404">404</h1>
        <p data-p="NOT FOUND">NOT FOUND</p>
      </div>
    </div>
    <div id="particles-js" />
  </Layout>
)

export default NotFoundPage
