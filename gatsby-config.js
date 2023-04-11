const path = require(`path`);
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-217481927-1"],
        pluginConfig: {
          head: true,
          anonymize_ip: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Diana Tofan",
        short_name: "logo",
        start_url: "/",
        display: "standalone",
        icon: "src/images/logos/logoNew.svg",
      },
    },
    {
      resolve: "@mkitio/gatsby-theme-password-protect",
      options: {
        password: process.env.ACCESS_KEY,
        pagePaths: ["/racefinder", "/about", "/resume"],
        partialMatching: true,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "typeface-metropolis",
  ],
};
