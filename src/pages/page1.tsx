import React from 'react'
import Problems from '~/src/components/Problems/Problems'
import HintList from '~/src/components/HintList'
import BodyHeding from '../components/BodyHeding'
import { Text } from '@chakra-ui/layout'
import PloblempageImg from '../components/PloblempageImg'
export const Home: React.VFC = () => {
  return (
    <div>
      <BodyHeding>STAGE：1 さぁゲームを始めよ(はじめよ)う！</BodyHeding>
      <Text>
        納豆(なっとう)から、逃げ(にげ)ている間に資料(しりょう)室に入った。
        そこには、パソコンがありパスワードを入れると工場の地図を手に入れることができる。
        下の画像(がぞう)の謎(なぞ)を解き(とき)、パスワードをキーワード欄(らん)に入力しよう。
        困っ(こまっ)たときは、ヒントがある。なるべく見ないようにゲームを進め(すすめ)ていこう。
      </Text>
      <PloblempageImg img="/StageAssets/stage1/image1.png" />
      <Problems
        nextPage="/stage_clear/1"
        correctList={[
          {
            title: 'ひらがなで入力してください',
            correctText: 'うま',
            type: 'text',
          },
        ]}
      />
      <HintList
        HintLists={[
          {
            title: 'ヒント1',
            body: '国語の教科書で、全員(ぜんいん)一度(いちど)は見たことがある図形だよ！',
          },
        ]}
      />
    </div>
  )
}

export default Home
