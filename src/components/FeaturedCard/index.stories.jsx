import FeaturedCard from './index'

export default {
  component: FeaturedCard,
  title: 'Components/Featured card',
  decorators: [story => <div style={{ maxWidth: '800px', margin: 'auto' }}>{story()}</div>],
}


const Template = (args) => <FeaturedCard {...args} />
export const Default = Template.bind({})
Default.args = {
  project: {
    image: 'https://picsum.photos/200/300',
    title: 'Project title',
    slug: 'project-title',
    year: 2022,
    type: 'Dashboard',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl eu nisl.',
  }
}
