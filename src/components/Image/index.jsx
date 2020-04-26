// import React from 'react'
// import PropTypes from 'prop-types'

// import { Container } from './styles'

// const Image = ({ src, alt, cover }) => (
//   <Container cover={cover}>
//     <img src={src} alt={alt} title={alt} />
//   </Container>
// )

// Image.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   cover: PropTypes.bool,
// }

// Image.defaultProps = {
//   cover: false,
// }

// export default Image

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ src, alt, fit }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1400) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(src)
      })

      if (!image) return null

      const style = {
        objectFit: fit,
        width: '100%',
        height: '100%',
      }

      const { childImageSharp, extension, publicURL } = image.node

      // svg support
      if (!childImageSharp && extension === 'svg') {
        return <img src={publicURL} alt={alt} />
      }

      return <Img alt={alt} fluid={childImageSharp.fluid} imgStyle={style} />
    }}
  />
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fit: PropTypes.oneOf(['contain', 'cover']),
}

Image.defaultProps = {
  fit: 'contain',
}

export default Image
