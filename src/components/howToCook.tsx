import React from 'react'
import { Text, Box, Img } from '@chakra-ui/react'
import BodyHeding from './BodyHeding'

export type Props = {
  title: string
  body: string | React.ReactNode
  imagesrc: string
}

const howToCook: React.VFC<Props> = (props) => {
  return (
    <Box>
      <BodyHeding>{props.title}</BodyHeding>
      <Img src={process.env.BASE_PATH + props.imagesrc} />
      <Text>{props.body}</Text>
    </Box>
  )
}

export default howToCook
