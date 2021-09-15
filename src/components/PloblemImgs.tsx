import React from 'react'
import { Image } from '@chakra-ui/react'
import ImagePath from '../lib/ImagePath'

export type Props = {
  img: string
}

const PloblempageImg: React.VFC<Props> = (props) => {
  return <Image mt="4" src={ImagePath(props.img)} />
}

export default PloblempageImg
