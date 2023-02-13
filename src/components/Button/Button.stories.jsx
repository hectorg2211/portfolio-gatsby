import Button from './index';

export default {
  component: Button,
  title: 'Button',
}

const Template = (args) => <Button {...args} />
export const Default = Template.bind({})
Default.args = {
  label: 'Button',
}