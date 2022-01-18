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
        icon: "src/images/logos/g12.svg",
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-217481927-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "dianatofan.net",
        enableWebVitalsTracking: true,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "typeface-metropolis",
  ],
};
