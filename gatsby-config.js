require("dotenv").config()

const typekitConfig = {
  typekit: {
    id: process.env.TYPEKIT_ID,
  },
}

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  host:
    process.env.CUSTOM_NODE_ENV !== "dummy"
      ? "cdn.contentful.com"
      : "preview.contentful.com",
  accessToken:
    process.env.CUSTOM_NODE_ENV !== "dummy"
      ? process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
      : process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    title: `Afspora - A platform for members of the African Diaspora and allies to learn, connect and support Africa`,
    description: `A way for the African Diaspora to support the development of the nations back home in Africa and the Caribbean, help reverse the effects of Colonialism and build a better, stronger Africa and Caribbean.`,
    author: `Ezeikel Pemberton <hi@ezeikel.dev>`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-GTN7TJT5W3"],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          // respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
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
      resolve: "gatsby-plugin-web-font-loader",
      options: typekitConfig,
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `0uo3ojc0ft0h`,
        accessToken: `hX231TB-SVf-ewPG3Vz-gezunE9He1fX_mE16mIYZkM`,
      },
    },
  ],
}
