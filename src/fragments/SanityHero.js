import {graphql} from 'gatsby'

export const SanityRecentPosts = graphql`
  fragment SanityHero on SanityHero {
    _key
    _type
    title
    subtitle
    imageSrc {
      asset {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
    buttonLabel
  }
`