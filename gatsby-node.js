const Promise = require('bluebird')
const path = require('path')

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;
//
//   return new Promise((resolve, reject) => {
//     const blogPost = path.resolve('./src/templates/blog-post.js');
//     resolve(
//       graphql(
//         `
//           {
//             allContentfulBlogPost {
//               edges {
//                 node {
//                   title
//                   slug
//                 }
//               }
//             }
//           }
//         `
//       ).then((result) => {
//         if (result.errors) {
//           console.log(result.errors);
//           reject(result.errors);
//         }
//
//         const posts = result.data.allContentfulBlogPost.edges;
//         posts.forEach((post) => {
//           createPage({
//             path: `/blog/${post.node.slug}/`,
//             component: blogPost,
//             context: {
//               slug: post.node.slug,
//             },
//           });
//         });
//       })
//     );
//   });
// };

exports.onCreateWebpackConfig = ({ stage, loaders, actions, getConfig }) => {
  const config = getConfig()
  config.resolve.alias = {
    ...config.resolve.alias,
    '~root': path.resolve(__dirname, 'src'),
    '~components': path.resolve(__dirname, 'src', 'components'),
    '~utils': path.resolve(__dirname, 'src', 'utils'),
    '~templates': path.resolve(__dirname, 'src', 'templates'),
  }

  actions.replaceWebpackConfig(config)
}
