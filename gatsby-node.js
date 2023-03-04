exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query SanityProjects {
      allSanityProject {
        nodes {
          _id
          title
          slug {
            current
          }
          image {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          year
          type
          _rawText
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  const projects = result.data.allSanityProject.nodes || [];
  projects.forEach((project) => {
    const path = `/projects/${project.slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/project"),
      context: { slug: project.slug.current },
    });
  });
};
