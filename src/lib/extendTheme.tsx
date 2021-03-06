import { extendTheme } from '@chakra-ui/react'
// 2. Call `extendTheme` and pass your custom values
const Text = {
  baseStyle: {
    color: 'black',
    lineHeight: '1.7',
    fontWeight: '500',
    fontFamily: `'Noto Sans JP', sans-serif`,
  },
}
const Image = {
  baseStyle: {
    borderRadius: 'base',
  },
}
const Button = {
  variants: {
    black: {
      bg: 'black',
      color: 'white',
      _hover: { bg: 'gray.900' },
    },
  },
}
export const theme = extendTheme({ components: { Text, Image, Button } })
// console.log(theme)
