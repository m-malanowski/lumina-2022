/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Lumina Studio - Website",
    description: "Lumina Studio - Website",
    author: "@webdev",
    twitterUsername: "@luminastudio2021",
    image: "/twitter-img.png",
    siteUrl: "https://lumina.studio",
  },
  plugins: [
    // `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        // postCssPlugins: [autoprefixer()],
        implementation: require('sass'),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-169184236-1" // Google Analytics / GA
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [
    //       "G-0J0X0PC2C5" // Google Analytics / GA
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://lumina-studio-2021-backend.herokuapp.com`,
        queryLimit: 1000, // Default to 100
          // contentTypes : `projects`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        collectionTypes: [`projects`, `articles`],

        // contentTypes: [`projects`],

        // singleTypes: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lumina - Studio`,
        short_name: `lumina Studio`,
        start_url: `/`,
        background_color: `#00579d`,
        theme_color: `#e8eef3`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
