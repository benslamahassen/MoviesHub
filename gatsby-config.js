module.exports = {
  siteMetadata: {
    title: 'MoviesHub',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'movies-hub',
        short_name: 'MoviesHub',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'movies-hub-api',
        accessToken:
          'MC5XNkZTaVNVQUFDVUE0N3I0.77-9LlJe77-9Re-_vV3vv70OCe-_vW0I77-9OSpzP--_vSfvv71177-977-977-9C--_vUTvv70wHw',
      },
    },
  ],
}
