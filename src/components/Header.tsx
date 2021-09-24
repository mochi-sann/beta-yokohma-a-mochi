import React from 'react'

import { Flex, Heading, Spacer, Container, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
const Header: React.VFC = () => {
  return (
    <Box boxShadow="base">
      <Container maxW="900px">
        <Flex py="1">
          <NextLink href="/">
            <Heading as="a" cursor="pointer">
              {/* たいとる */}
            </Heading>
          </NextLink>
          <Spacer />
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
