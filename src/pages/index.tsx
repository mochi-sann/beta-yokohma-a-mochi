import React from 'react'

import useNextPage from '../hooks/useNextPage'
import { Button } from '@chakra-ui/react'

export const Home: React.VFC = () => {
  const { handleClick } = useNextPage({ nextPage: '/page1' })
  return (
    <div>
      <p>がぞう</p>
      <Button
        colorScheme="gray"
        onClick={() => {
          handleClick({ isCorrect: true, NotShowToast: true })
        }}
        // as="a"
      >
        {' '}
        ゲームを始める
      </Button>
    </div>
  )
}

export default Home
