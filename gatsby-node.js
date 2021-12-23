const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const resultForProjects = await graphql(`
    {
      projects: allStrapiProjects {
        nodes {
          slug
        }
      }
    }
  `)
  const resultForArticles = await graphql(`
    {
      allStrapiArticles {
        nodes {
          Slug
        }
      }
    }
  `)

  resultForProjects.data.projects.nodes.forEach(project => {
    createPage({
      path: `/agencja-interaktywna-realizacje/${project.slug}`,
      component: path.resolve(`src/templates/projects-template.js`),
      context: {
        slug: project.slug,
      },
    })
  })

  resultForArticles.data.allStrapiArticles.nodes.forEach(article => {
    createPage({
      path: `/artykuly/${article.Slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        Slug: article.Slug,
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
