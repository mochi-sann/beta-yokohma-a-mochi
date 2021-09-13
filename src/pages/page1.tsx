import React from 'react'
import Problems from '~/src/components/Problems/Problems'
import HintList from '~/src/components/HintList'
import BodyHeding from '../components/BodyHeding'
import { Text } from '@chakra-ui/layout'

export const Home: React.VFC = () => {
  return (
    <div>
      <BodyHeding>STAGE：1 さぁゲームを始めよう！</BodyHeding>
      <Text>
        納豆から、逃げている間に資料室に入った。
        そこには、パソコンがありパスワードを入れると工場の地図を手に入れることができる。
        下の画像の謎を解き、パスワードをキーワード欄に入力しよう。
        困ったときは、ヒントがある。なるべく見ないようにゲームを進めていこう。
      </Text>
      <Problems
        nextPage="/stage_clear/1"
        correctList={[
          {
            title: 'タイトル1',
            correctText: 'うま',
            type: 'text',
          },
        ]}
      />
      <HintList
        HintLists={[
          {
            title: 'ヒント1',
            body: '国語の教科書で、全員一度は見たことがある図形だよ！',
          },
        ]}
      />
    </div>
  )
}

export default Home
