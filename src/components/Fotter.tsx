import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Fotter: React.VFC = () => {
  return (
    <Box bg="gray.200" mt="4" fontWeight="800">
      <Box py="4" className="text-center">
        <Text textAlign="center">
          授業主催： N・S高
          <br />
          協力：株式会社SCRAP
          <br />
          企画制作：N・S高生
        </Text>
      </Box>
      <Box py="4" className="text-center">
        <Text textAlign="center" className="text-center">
          「リアル脱出ゲーム」は株式会社SCRAPの登録商標です。
        </Text>
        <Text textAlign="center" mt="4" className="text-center">
          株式会社SCRAPとN・S高で実施した授業「リアル脱出ゲームの作り方」の一環で
          <br />
          生徒が制作したものであり、SCRAPが主催/公認するものではありません。
        </Text>
      </Box>
    </Box>
  )
}

export default Fotter
