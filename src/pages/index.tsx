import React from 'react'
import { Image } from '@chakra-ui/react'
export const Home: React.VFC = () => {
  return (
    <div>
      <Image
        src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2800&q=80"
        w="full"
        h="300px"
        m="0 -100%"
        p="0 100%%"
      />
      <p>がぞう</p>
    </div>
  )
}

export default Home
