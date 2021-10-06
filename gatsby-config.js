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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `pt`],
        defaultLanguage: `pt`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `http://localhost:8000/`,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    `gatsby-plugin-preload-fonts`,
  ],
}
