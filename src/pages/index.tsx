import React from 'react'

import useNextPage from '../hooks/useNextPage'
import { Button, Image } from '@chakra-ui/react'
import MainCard from '../components/MainCard'

export const Home: React.VFC = () => {
  const { handleClick } = useNextPage({ nextPage: '/page1' })
  return (
    <div>
      <Image src="/ogp/Titleimg.png" mt="2" borderRadius="0.5em" />
      <MainCard
        list={[
          { title: 'たいとる', description: 'description' },
          { title: 'たいとる', description: 'description' },
        ]}
      />
      <Button
        mt="2"
        colorScheme="gray"
        w="full"
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
