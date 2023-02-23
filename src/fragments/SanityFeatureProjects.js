import {graphql} from 'gatsby'

export const SanityFeatureProjects = graphql`
fragment SanityFeatureProjects on SanityFeatureProjects{
  _key
  _type
  title
  projects{
    id
    title
    slug{
      current
    }
    image{
      asset{
        gatsbyImageData(placeholder:BLURRED)
      }
    }
    year
    type
    _rawText
  }
}
`