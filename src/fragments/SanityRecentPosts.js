import {graphql} from 'gatsby'

export const SanityRecentPosts = graphql`
  fragment SanityRecentPosts on SanityRecentPosts { 
    _type
    title
  }
`