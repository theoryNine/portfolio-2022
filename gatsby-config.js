module.exports = {
  siteMetadata: {
    title: `Ansel Colvin | Front-End Developer`,
    description: ``,
    author: `Ansel Colvin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        icon: 'src/images/logo.png',
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Mulish\:200,200i,400,400i,500,500i,700,700i`,
          `Pacifico\:200,200i,400,400i,500,500i,700,700i`
        ],
        display: 'swap'
      }
    },
  ],
}
