const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      projects: allStrapiProjects {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.projects.nodes.forEach(project => {
    createPage({
      path: `/agencja-interaktywna-realizacje/${project.slug}`,
      component: path.resolve(`src/templates/projects-template.js`),
      context: {
        slug: project.slug,
      },
    })
  })
}

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html" || stage === "develop-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /locomotive-scroll/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }

// // Creating node for array media query
// const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
//
// exports.onCreateNode = async ({ node, actions, store, cache }) => {
//   const { createNode, createNodeField } = actions;
//
//   if (node.internal.type !== null && node.internal.type === "strapiProjects") {
//     for (const category of node.category) {
//       for (const image of category.images) {
//         console.log(image);
//         const fileNode = await createRemoteFileNode({
//           url: "http://localhost:1337" + image.url,
//           store,
//           cache,
//           createNode,
//           createNodeId: (id) => image.id.toString(),
//         });
//
//         if (fileNode) {
//           image.localFile___NODE = fileNode.id;
//         }
//       }
//     }
//   }
// };
