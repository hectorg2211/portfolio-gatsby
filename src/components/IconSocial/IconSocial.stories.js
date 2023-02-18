import IconSocial from './index';

export default {
    component: IconSocial,
    title: 'Components/Social icon',
}

const Template = (args) => <IconSocial {...args} />
export const Default = Template.bind({})
Default.args = {
    socialLink: 'https://www.google.com',
    icon: 'fa-brands fa-square-facebook',
    size: '4x'
}