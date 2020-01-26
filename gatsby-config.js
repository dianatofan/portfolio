const path = require(`path`);

module.exports = {
  pathPrefix: `/portfolio`,
  siteMetadata: {
    title: `Diana Tofan`,
    description: `Playground`,
    author: `@gastbyjs`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sass`,
    `typeface-metropolis`,
    `typeface-comfortaa`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
