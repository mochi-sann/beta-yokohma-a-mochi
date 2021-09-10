import React from 'react'
import { Box, Heading, Text, Divider, Flex } from '@chakra-ui/react'
export type Props = {
  list: { title: string; description: string }[]
}

const MainCard: React.VFC<Props> = (props) => {
  return (
    <Flex py="2" css={{ gap: '.5rem' }}>
      {props.list.map((item) => (
        <Box key={item.title} borderWidth="2px" p="2" w="full" rounded="md">
          <Heading as="h3" p="2" size="lg">
            {item.title}
          </Heading>
          <Divider size="lg" />
          <Text p="2">{item.description}</Text>
        </Box>
      ))}
    </Flex>
  )
}

export default MainCard
