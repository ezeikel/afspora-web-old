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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-GTN7TJT5W3",
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
