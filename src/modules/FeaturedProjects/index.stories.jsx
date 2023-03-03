import React from 'react'
import FeaturedProjects from './index'
import { gatsbyImageData } from '../../utils/testData'

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
      image: gatsbyImageData,
      title: 'Project title',
      slug: 'project-title',
      year: 2022,
      type: 'Dashboard',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nisl.',
    },
    {
      id: 2,
      image: gatsbyImageData,
      title: 'Project title',
      slug: 'project-title',
      year: 2022,
      type: 'Dashboard',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nisl.',
    },
    {
      id: 3,
      image: gatsbyImageData,
      title: 'Project title',
      slug: 'project-title',
      year: 2022,
      type: 'Dashboard',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nisl.',
    }
  ]
}