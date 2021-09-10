import { extendTheme } from '@chakra-ui/react'
// 2. Call `extendTheme` and pass your custom values
const Text = {
  baseStyle: {
    color: 'black',
    lineHeight: '1.7',
  },
}
const Image = {
  baseStyle: {
    borderRadius: 'base',
  },
}
export const theme = extendTheme({ components: { Text, Image } })
