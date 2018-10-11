import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Movie from '../components/MovieCard'

const Browse = ({ data }) => {
  return (
    <Layout>
		<h1 className="text-center mt-3">All of our Movies</h1>
      <div className="row m-0 justify-content-start">
        {data.allPrismicMovie.edges.map((elem, index) => {
          const data = elem.node.data
          return (
            <Movie
              uid={elem.node.uid}
              key={index}
              descrption={data.description.text}
              title={data.title.text}
              poster={data.poster.url}
            />
          )
        })}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allPrismicMovie {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            description {
              text
            }
            poster {
              url
            }
          }
        }
      }
    }
  }
`
export default Browse
