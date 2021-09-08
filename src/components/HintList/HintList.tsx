import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from '@chakra-ui/react'

export type Props = {
  HintLists: {
    title: string
    body: string
  }[]
  HintTitle?: string
}

const HintList: React.VFC<Props> = (props) => {
  return (
    <Box py="4">
      <Box p="4" mb="2" bg="gray.100" rounded="lg">
        <Heading p="2" py="4">
          {props.HintTitle || 'ヒント'}
        </Heading>
        <Accordion defaultIndex={[0]} allowMultiple>
          {props.HintLists.map((hint, index) => (
            <AccordionItem borderColor="gray.400" key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {hint.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{hint.body}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  )
}

export default HintList
