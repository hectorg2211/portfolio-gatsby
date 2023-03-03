import PostCard from './index'

export default {
  component: PostCard,
  title: 'Components/Post card',
}

const Template = (args) => <PostCard {...args} />
export const Default = Template.bind({})
Default.args = {
  post: {
    title: 'Making a design system from scratch',
    _updatedAt: '2023-02-12',
    labels: 'Design, Pattern',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  }
}