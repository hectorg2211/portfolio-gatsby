import Avatar from './index'

export default {
  component: Avatar,
  title: 'Components/Avatar'
}

const Template = args => <Avatar {...args}/>
export const Default = Template.bind({})
Default.args = {
  imageSrc: 'https://images.unsplash.com/photo-1668554245893-2430d0077217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
}