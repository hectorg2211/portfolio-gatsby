import Home from '../index'
import * as FeaturedProjectsStories from '../../modules/FeaturedProjects/index.stories'

export default {
  component: Home,
  title: 'Pages/Home'
}

const Template = (args) => <Home {...args} />

export const Default = Template.bind({})
Default.args = {
  modules: [
    {
      type: 'Hero',
      title: 'Welcome to the Storybook',
      subtitle: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
      imageSrc: 'https://images.unsplash.com/photo-1668554245893-2430d0077217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      type: 'Featured',
      projects: [
        ...FeaturedProjectsStories.Default.args.projects
      ]
    }
  ]
}