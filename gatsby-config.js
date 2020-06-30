module.exports = {
  siteMetadata: {
    title: `54 Leaders - Make Africa a Super Power`,
    description: `A way for the African Diaspora to keep up to date with the politics back home.`,
    author: `Ezeikel Pemberton <hi@ezeikel.dev>`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "",
        head: true,
        // TODO: find out if this is required due to any privacy laws
        // anonymize: true,
        // respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
    `gatsby-plugin-react-helmet`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `0uo3ojc0ft0h`,
        accessToken: `hX231TB-SVf-ewPG3Vz-gezunE9He1fX_mE16mIYZkM`,
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "",
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
  ],
}
