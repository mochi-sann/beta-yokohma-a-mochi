import React from 'react'
import { Image } from '@chakra-ui/react'

export type Props = {
  img: string
}

const PloblempageImg: React.VFC<Props> = (props) => {
  return <Image mt="4" src={process.env.BASE_PATH || '' + props.img} />
}

export default PloblempageImg
