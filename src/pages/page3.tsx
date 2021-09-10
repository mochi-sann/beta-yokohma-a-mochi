import { Text } from '@chakra-ui/layout'
import React from 'react'
import Problems from '~/src/components/Problems/Problems'

export const Home: React.VFC = () => {
  return (
    <div>
      <Text>
        STAGE:3 追いつかれてしまった、最終手段だ!
        地図に絶対押してはいけないって書いてあるけど、もう押すしかない!
        下の画像の謎を解き、答えをキーワード欄に入力し、ボタンを押そう!
        困ったときは、ヒントがある。なるべく見ないようにゲームを進めていこう。
      </Text>
      <Problems
        nextPage="/fainal"
        correctList={[
          {
            title: 'タイトル1',
            correctText: '冷却',
            type: 'text',
          },
        ]}
      />
    </div>
  )
}

export default Home
