import Button from './index';

export default {
  component: Button,
  title: 'Components/Button',
}

const Template = (args) => <Button {...args} />
export const Default = Template.bind({})
Default.args = {
  label: 'Download resume',
}