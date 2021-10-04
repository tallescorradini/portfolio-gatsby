/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans', 'Lexend Deca'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Talles Corradini's Portfolio`,
        start_url: `/#home`,
        background_color: `white`,
        theme_color: `white`,
        display: `standalone`,
        icon: `static/favicon-512.png`,
        icons: [
          {
            src: `static/favicon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `static/favicon-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
