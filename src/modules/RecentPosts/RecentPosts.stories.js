import RecentPosts from './index'

export default {
    component: RecentPosts,
    title: 'RecentPosts'
}

const Template = args => <RecentPosts {...args}/>
export const Default = Template.bind({})
Default.args = {
    title: 'Making a design system from scratch',
    date: '12 Feb 2023',
    labels: 'Design, Pattern',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
}