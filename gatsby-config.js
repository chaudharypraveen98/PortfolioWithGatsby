/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Praveen Chaudhary`,
    description: `This is the portfolio of Praveen Chaudhary. It contains all the Projects with video links`,
    author: `@chaudharypraveen98`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imageSlider`,
        path: `${__dirname}/src/data/bg`, // wherever background images are stored
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
  ]
}
