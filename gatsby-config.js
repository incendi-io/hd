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

const creds = {
  "type": "service_account",
  "project_id": "hdweb-9f081",
  "private_key_id": "8124a1bc862d95deadb22d55e91cb1db6011cf7d",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCsU33buC8q4hRq\naUk1DOM51pCXRV9GFticKwIfOckfg0tffgAJSyZ85GQj4WJpq2NJYuhT0q8FSjcR\nJhPzR4ZfezRO/vfNEoNg9VbrX95yN4a49FFC+iD27ybUp1cAo7FzIfgDsEgdM/No\nZLioK4oH90HX7VOzKWsNxZWuTm9yv1gLP6HmTMOGd23ZaQmbmUb8dM75splkiHhe\no8W8TzgRx/rbG6b/X8yNZswlALo4/ldqdh57dxn+UXhXVUCtMwCWz7r5vhYe5PMw\nloBSAwzMp7fQlGgpnsuk7cVZvHoxMB1J7z46rgohoo71b6j000Y/4KJbehvzBVeP\nT+eVNJwnAgMBAAECggEAGTxy4oHzGl8YaUr45xV3k0lKTHTi0nNXDmu3+FWwj/Zc\ny+O6YqIIRWL3DVAc5uer9xvOdTQV4HrxXIgMhOSVF5eF3gm1xWjwJ3tWWsrj2ysp\nhh11Zw8VU8RLFfpZoeTXAErZtMSUkv5AJ6oUZsBVivwZPuNpDgRDQrWMSYYACTgh\nyHpUlRgvhQQUlqZUWvxEd7Ol+RWIO41UqEM92bDluMJs7Q0L2z8sz4pGmT22Ow3B\ne3/5Lu8FV8hHJVozWUil9xwui9lYZ26lfWSYKfU31+Q4dTVWxIR4DKcxLwd6bFgX\nuEp1VL9r23iXrXfLUvQaBX5PHx9pgkacT9X2hSLkxQKBgQDVbFOdkvtryOz//I6X\nRq7MnJcW0pN2074L0nI0HJ39rAvP85z3lJ+9bQQlVqGBbADbqSFUCfBQuvWbBevD\nv36YshrF6mQVanZB2A/tmEnpZMT/xpUa0H5Gbed1QFH367srVkdfzsjnoxNkCHMo\nchU9oJ5xvd4msrQkkkMP4ML5AwKBgQDOtE+nkenfbHawGbmElNYB3SmMOn/3Em+l\n64qJIUrzUkXP0+41xwpDd7031+0Zff8i3zTzcXsmLC0e9VNUiCG1KPKHdQ+acbGU\nNC498SdzzBHsAEsix+jZyzCsyMAvj6mSCV0BjvbRCTkuaxmU76Oq4Ao5wNFGaf3U\nFc8tUxL9DQKBgQClwDXIQSjGcwutW6YaUqja/BpTfUNNm/ETGWPcmQUSyBV8cYTM\nuz68TPhVT0yrSQf5kQbzT6y15h1tQlHyeryFNn2YjAsinsYtKPJl4ko02zAsPTv7\n0UTgyeZip4uBcjCw3ZcdD2n0jDA5Fl7pYICiliW3zG/FujAx3u36XOLPpQKBgHqv\nRr/cuQUlKWToP9ZTSJoenHRgnGcXCDFglf9CRWwaHtl1nmNI2eyleydT/6Qrxmz6\nMkFzz3YerkE7ttPrYKZXwWtorXQrmwyt0+xr39C5BMIggngIU0pBcYh8NqWEDU9i\nQ1OTeSck5E2Kv8pIWcon46nXqd6zNjbVIvxx3ElZAoGAQczHm0fm01UEGzZaFhY5\n+SSHx9zNmS2Uy0VIiTZ9jKL9IsJxRnSEM6s++1iTobI50JeKsKYyVMEiwiIW5FTD\nRxz0uA7X0LRj8ydD8usWN5wgmhzcQdF3rUtmsans8Sei/sB5GUjjO4c5ryZNj9iS\nA9Bo+RdVIz+fWoFhdjiN3Hg=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-c9kd8@hdweb-9f081.iam.gserviceaccount.com",
  "client_id": "118062450931160324964",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-c9kd8%40hdweb-9f081.iam.gserviceaccount.com"
};

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
