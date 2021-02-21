const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Diana Tofan`,
    siteUrl: "https://dianatofan.net",
    description: `Portfolio`,
    author: `@dianatofan`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
