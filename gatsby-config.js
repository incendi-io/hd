const path = require(`path`)

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_DELIVERY_TOKEN,
}

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error('Contentful spaceId and the access token need to be provided.')
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
  },
  pathPrefix: '/hd',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
        ignore: [`**/.*`],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: '@deanc/gatsby-source-firestorer',
      options: {
        config: {
          apiKey: 'AIzaSyAlFcSh6rlrXU9h7MMzmzRTsAzQ06Vf9pg',
          authDomain: 'hdweb-9f081.firebaseapp.com',
          databaseURL: 'https://hdweb-9f081.firebaseio.com',
          storageBucket: 'hdweb-9f081.appspot.com',
          projectId: 'hdweb-9f081',
          messagingSenderId: '123650222952',
          appId: '1:123650222952:web:bdcdee46e55f19974644dd',
          measurementId: 'G-4PF8CD4CNV',
        },
        types: [
          {
            type: 'eCommerce',
            collection: 'eCommerce',
            map: (doc) => ({
              ...doc,
              slug: `/parts/${doc.partNumber}`.toLowerCase(),
            }),
          },
        ],
      },
    },
  ],
}
