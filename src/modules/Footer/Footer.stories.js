import Footer from './index'

export default {
    component: Footer,
    title: 'Modules/Footer'
}

const Template = args => <Footer {...args}/>
export const Default = Template.bind({})
Default.args = {
    text: 'Copyright ©2023 All rights reserved'
}