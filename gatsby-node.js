const path = require('path')
const {createNewsPagePath} = require("./src/utils/createNewsPagePath");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  await Promise.all([
    createSubfamilyPages(graphql, createPage),
    createProductFamiliesPages(graphql, createPage),
    createNewsPages(graphql, createPage),
    createPartsPages(graphql, createPage),
    createRedirect({ fromPath: '/our-business', toPath: '/our-business/about-us', isPermanent: true })
  ])
}

async function createPartsPages(graphql, createPage) {
  const result = await graphql(`
    {
      items: allECommerce {
        nodes {
          id
          slug
        }
      }
    }
  `)

  //TODO: add categories query
  const mockCategories = [{
    title: 'Attachments',
    slug: 'attachments',
    children: [{
      title: 'Buckets',
      slug: 'buckets',
    },{
      title: 'Machine Work Lights',
      slug: 'machine-work-lights',
    },{
      title: 'Flywheel',
      slug: 'flywheel',
    },{
      title: 'Connectors and Terminals',
      slug: 'connectors-and-terminals',
    },{
      title: 'Springs',
      slug: 'springs',
    },{
      title: 'Cooling System Components',
      slug: 'cooling-system-components',
    },{
      title: 'Turbocharger',
      slug: 'turbocharger',
    },]
  },{
    title: 'Electronics',
    slug: 'electronics',
    children: [{
      title: 'Bucket GET',
      slug: 'bucket-get',
    },{
      title: 'Cooling System Components',
      slug: 'cooling-system-components',
    },]
  },{
    title: 'Drive Train',
    slug: 'drive-train',
    children: [{
      title: 'Gears',
      slug: 'gears',
    },{
      title: 'Transmissions',
      slug: 'transmissions',
    },{
      title: 'Differentials',
      slug: 'differentials',
    },{
      title: 'Fittings and Adapters',
      slug: 'fittings-and-adapters',
    },{
      title: 'Final Drive',
      slug: 'final-drive',
    },]
  },{
    title: 'Shop Supplies',
    slug: 'shop-supplies',
    children: [{
      title: 'Harnesses and Wire',
      slug: 'harnesses-and-wire',
    }]
  },{
    title: 'Hydraulics',
    slug: 'hydraulics',
    children: []
  }]

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const template = path.resolve('./src/templates/Parts/Part/index.tsx')
  const categoryTemplate = path.resolve('./src/templates/Parts/PartCategory/index.tsx')
  const subCategoryTemplate = path.resolve('./src/templates/Parts/PartCategory/index.tsx')
  const items = result.data.items.nodes

  mockCategories.forEach((cat) => {
    createPage({
      path: `cat/${cat.slug}`,
      component: categoryTemplate,
      context: {
        id: '123',
        cat: cat.title,
        limit: 10
      },
    })
    cat.children.forEach((subcat) => {
      createPage({
        path: `cat/${cat.slug}/${subcat.slug}`,
        component: subCategoryTemplate,
        context: {
          id: '123',
          cat: cat.title,
          limit: 10
        },
      })
    })
  })

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

  const template = path.resolve('./src/templates/Products/ProductSubfamily/index.tsx')
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

  const template = path.resolve('./src/templates/Products/ProductFamily/index.tsx')
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
