import Hero from './index'
import * as AvatarStories from '../../components/Avatar/Avatar.stories'

export default {
  component: Hero,
  title: 'Modules/Hero'
}

const Template = args => <Hero {...args}/>
export const Default = Template.bind({})
Default.args = {
    title: 'Welcome to the Storybook',
    subtitle: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
    buttonLabel: 'Download resume',
    document: '',
    imageSrc: AvatarStories.Default.args.imageSrc
}