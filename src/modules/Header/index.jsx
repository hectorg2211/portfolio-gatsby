import React from 'react'
import { Box, Flex, HStack, IconButton, Stack, useColorModeValue, useDisclosure, } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { graphql, useStaticQuery, Link } from 'gatsby'

const NavLink = ({ to, children }) => (
  <Link
    to={`/${to}`}>
    {children}
  </Link>
)

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { sanityHeader } = useStaticQuery(query)

  return (
    <div className='container m-auto'>
      <Box
        bg={useColorModeValue('white', 'white')}
        px={4}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'right'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen} />
          <HStack
            spacing={8}
            alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <>
                {sanityHeader.links.map((link) => (
                  <NavLink key={link._key} to={link.slug.current}>{link.label}</NavLink>
                ))}
              </>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            display={{ md: 'none' }}>
            <Stack
              as={'nav'}
              spacing={4}>
              <>
                {sanityHeader.links.map((link) => (
                  <NavLink key={link._key} to={link.slug.current}>{link.label}</NavLink>
                ))}
              </>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  )
}

const query = graphql`
  query Header {
    sanityHeader {
      links {
        _key
        label
        slug {
          current
        }
      }
    }
  }
  `