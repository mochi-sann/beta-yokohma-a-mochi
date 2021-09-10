import React from 'react'
import { Box, Heading, Text, Divider, Flex } from '@chakra-ui/react'
export type Props = {
  list: { title: string; description: string }[]
}

const MainCard: React.VFC<Props> = (props) => {
  return (
    <Flex py="2" style={{ gap: '0.5em' }}>
      {props.list.map((item) => (
        <Box key={item.title} borderWidth="2px" p="2" w="full" rounded="md">
          <Heading as="h3" size="lg">
            {item.title}
          </Heading>
          <Divider size="lg" />
          <Text>{item.description}</Text>
        </Box>
      ))}
    </Flex>
  )
}

export default MainCard
