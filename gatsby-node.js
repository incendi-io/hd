const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await Promise.all([
    createProductPages(graphql, createPage),
    createProductFamiliesPages(graphql, createPage)
  ])
}

async function createProductPages(graphql, createPage) {
  const result = await graphql(`
    {
      products: allContentfulProductModel {
        nodes {
          id
          name
          productSubfamily {
            family {
              name
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const template = path.resolve('./src/templates/Product/index.tsx')
  const items = result.data.products.nodes

  items.map((product) => {
    createPage({
      path: `products/new/${createSlug(product.productSubfamily.family.name)}/${createSlug(product.name)}`,
      component: template,
      context: {
        id: product.id
      }
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
      path: `products/new/${createSlug(node.name)}`,
      component: template,
      context: {
        id: node.id
      }
    })
  })
}

function createSlug(name) {
  return name.replace(' ', '-').toLowerCase()
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

  actions.replaceWebpackConfig(config)
}
