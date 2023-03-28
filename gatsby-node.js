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



const createBlogPages = async (graphql, createPage) => {
  const result = await graphql(`
      query SanityPosts {
        allSanityPost {
          nodes {
            slug {
              current
            }
          }
        }
      }
    `);

  if (result.errors) throw result.errors;
  const posts = result.data.allSanityPost.nodes || [];
  posts.forEach((posts) => {
    const path = `/blog/${posts.slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/post"),
      context: { slug: posts.slug.current },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  return await Promise.all([createProjectPages(graphql, createPage), createBlogPages(graphql, createPage)]);
};
