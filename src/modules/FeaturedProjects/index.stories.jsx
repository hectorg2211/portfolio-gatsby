import FeaturedProjects from './index'

export default {
  component: FeaturedProjects,
  title: 'Modules/Featured projects'
}

const Template = (args) => <FeaturedProjects {...args}/>

export const Default = Template.bind({})
Default.args = {
  projects: [
    {
      id: 1,
      image: 'https://picsum.photos/200/300',
      title: 'Project title',
      slug: 'project-title',
      year: 2022,
      type: 'Dashboard',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nisl.',
    },
    {
      id: 2,
      image: 'https://picsum.photos/200/100',
      title: 'Project title',
      slug: 'project-title',
      year: 2022,
      type: 'Dashboard',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nisl.',
    },
    {
      id: 3,
      image: 'https://picsum.photos/200/200',
      title: 'Project title',
      slug: 'project-title',
      year: 2022,
      type: 'Dashboard',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nisl.',
    }
  ]
}