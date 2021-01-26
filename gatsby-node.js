const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await Promise.all([
    createSubfamilyPages(graphql, createPage),
    createProductFamiliesPages(graphql, createPage),
    createNewsPages(graphql, createPage),
    createPartsPages(graphql, createPage),
  ])
}

async function createPartsPages(graphql, createPage) {
  const result = await graphql(`
    {
      items: allECommerceTest {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const template = path.resolve('./src/templates/Part/index.tsx')
  const items = result.data.items.nodes

  items.forEach((item) => {
    createPage({
      path: item.slug,
      component: template,
      context: {
        id: item.id,
      },
    })
  })
}

async function createSubfamilyPages(graphql, createPage) {
  const result = await graphql(`
    {
      items: allContentfulProductSubfamily {
        nodes {
          id
          slug
          family {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const template = path.resolve('./src/templates/ProductSubfamily/index.tsx')
  const items = result.data.items.nodes

  items.forEach((item) => {
    createPage({
      path: `products/new/${item.family.slug.toLowerCase()}/${item.slug.toLowerCase()}`,
      component: template,
      context: {
        id: item.id,
      },
    })
  })
}

async function createProductFamiliesPages(graphql, createPage) {
  const result = await graphql(`
    {
      productFamilies: allContentfulProductFamily {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const template = path.resolve('./src/templates/ProductFamily/index.tsx')
  const items = result.data.productFamilies.edges
  items.forEach(({ node }) => {
    createPage({
      path: `products/new/${node.slug.toLowerCase()}`,
      component: template,
      context: {
        id: node.id,
      },
    })
  })
}

async function createNewsPages(graphql, createPage) {
  const result = await graphql(`
    {
      news: allContentfulNews {
        nodes {
          id
          slug
          createdAt
        }
      }
    }  
  `)

  if (result.errors) {
    console.log(result.errors)
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const template = path.resolve('./src/templates/News/index.tsx')
  const items = result.data.news.nodes

  items.forEach(({ slug, createdAt, id }) => {
    createPage({
      path: createNewsPagePath({ slug, createdAt }),
      component: template,
      context: {
        id,
      },
    })
  })
}

function createNewsPagePath({ slug, createdAt }) {
  const date = new Date(createdAt)
  return `our-business/news-and-media/news/${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getHours()}/${date.getMinutes()}/${slug}`
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions, getConfig }) => {
  const config = getConfig()
  config.resolve.alias = {
    ...config.resolve.alias,
    '~root': path.resolve(__dirname, 'src'),
    '~components': path.resolve(__dirname, 'src', 'components'),
    '~utils': path.resolve(__dirname, 'src', 'utils'),
    '~templates': path.resolve(__dirname, 'src', 'templates'),
    '~types': path.resolve(__dirname, 'src', 'types'),
  }

  if (stage === 'build-html') {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }

  const definePlugin = config.plugins.find(p => p.definitions);
  definePlugin.definitions[`process.env.AUTH0_DOMAIN`] = JSON.stringify(process.env.AUTH0_DOMAIN)
  definePlugin.definitions[`process.env.AUTH0_CLIENTID`] = JSON.stringify(process.env.AUTH0_CLIENTID)
  definePlugin.definitions[`process.env.AUTH0_CALLBACK`] = JSON.stringify(process.env.AUTH0_CALLBACK)

  actions.replaceWebpackConfig(config)
}
