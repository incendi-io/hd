require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_DELIVERY_TOKEN,
}

const fireStoreConfig = {
  private_key_id: process.env.FIRESTORE_PRIVATE_KEY_ID,
  private_key: process.env.FIRESTORE_PRIVATE_KEY
}

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
}

const { spaceId, accessToken } = contentfulConfig

const creds = {
  "type": "service_account",
  "project_id": "hdweb-9f081",
  "private_key_id": fireStoreConfig.private_key_id,
  "private_key": fireStoreConfig.private_key,
  "client_email": "firebase-adminsdk-c9kd8@hdweb-9f081.iam.gserviceaccount.com",
  "client_id": "118062450931160324964",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-c9kd8%40hdweb-9f081.iam.gserviceaccount.com"
};

console.log(creds);

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
      resolve: 'gatsby-source-firestore-hd',
      options: {
        credential: creds,
        projectId: 'hdweb-9f081',
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
