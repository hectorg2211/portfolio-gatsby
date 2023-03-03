import Avatar from './index'
import { gatsbyImageData } from '../../utils/testData'

export default {
  component: Avatar,
  title: 'Components/Avatar'
}
const Template = args => <Avatar {...args}/>
export const Default = Template.bind({})
Default.args = {
  imageSrc: gatsbyImageData
}