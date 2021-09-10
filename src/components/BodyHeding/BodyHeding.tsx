import React from 'react'
import { Heading, Box } from '@chakra-ui/react'

export type Props = { children: React.ReactNode }

const BodyHeding: React.VFC<Props> = (props) => {
  return (
    <Box py="2">
      <Heading p="2" bg="gray.200">
        {props.children}
      </Heading>
    </Box>
  )
}

export default BodyHeding
