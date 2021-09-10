import React from 'react'

import useNextPage from '../hooks/useNextPage'
import { Button, Image, Text } from '@chakra-ui/react'
import MainCard from '../components/MainCard'
import BodyHeding from '../components/BodyHeding'

export const Home: React.VFC = () => {
  const { handleClick } = useNextPage({ nextPage: '/page1' })
  return (
    <div>
      <Image src="/ogp/Titleimg.png" mt="2" borderRadius="0.5em" />
      <BodyHeding>ストーリー</BodyHeding>
      <Text py="2">
        とある小学校が納豆工場の工場見学を申し込んだ。納豆工場はより美味しい納豆を作るために、日々納豆菌の研究をしており、品種改良を行っていくうちに納豆菌がおかしな行動をとることが目撃されている。工場はその納豆菌を隠している後ろめたさがあるが、公表していないため断る理由もなく受け入れた。
        <br />
        工場見学がちゃくちゃくと進んでいく中、プレイヤーの班は集団と離れて工場の探検をしてしまう。プレイヤーはある異変に気づいた。工場内がどんどん暑くなっていくのだ。耐えがたい環境になっていくので急いで集団と合流しようと決めたとき、奴が暴れだした。
      </Text>
      <BodyHeding>ゲームを開始する前に</BodyHeding>

      <MainCard
        list={[
          {
            title: '紙とペンを用意しよう！',
            description:
              'メモをとるための紙と筆記用具をお手元にご準備ください。',
          },
          {
            title: 'コミュニケーションをちゃんと取ろう',
            description:
              '2人でゲームを進めていくので、情報共有はしっかりと行ってください。',
          },
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
        準備OK？では、ゲームスタート！！！
      </Button>
    </div>
  )
}

export default Home
