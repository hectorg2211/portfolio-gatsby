const createProjectPages = async (graphql, createPage) => {
  const result = await graphql(`
    query SanityProjects {
      allSanityProject {
        nodes {
          slug {
            current
          }
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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  return await Promise.all([createProjectPages(graphql, createPage)]);
};
