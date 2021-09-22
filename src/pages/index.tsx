import React from 'react'

import useNextPage from '~/src/hooks/useNextPage'
import { Button, Text, Img } from '@chakra-ui/react'
import MainCard from '../components/MainCard'
import BodyHeding from '../components/BodyHeding'
import PloblempageImg from '../components/PloblempageImg'
import ImagePath from '../lib/ImagePath'

export const Home: React.VFC = () => {
  const { handleClick } = useNextPage({ nextPage: '/page1' })
  return (
    <div>
      <Img src={ImagePath('/ogp/Titleimg.png')} mt="2" />
      <BodyHeding>ストーリー</BodyHeding>
      <Text py="2">
        とある小学校が納豆(なっとう)工場の工場見学を申し込ん(もうしこん)だ。納豆(なっとう)工場はより美味しい(おいしい)納豆(なっとう)を作るために、日々納豆菌(なっとうきん)の研究(けんきゅう)をしており、品種(ひんしゅ)改良(かいりょう)を行っていくうちに納豆菌(なっとうきん)がおかしな行動(こうどう)をとることが目撃(もくげき)されている。工場はその納豆菌(なっとうきん)を隠し(かくし)ている後ろめたさがあるが、公表(こうひょう)していないため断る(ことわる)理由(りゆう)もなく受け入れ(うけいれ)た。{' '}
        <br />
        工場見学がちゃくちゃくと進ん(すすん)でいく中、プレイヤーの班(はん)は集団(しゅうだん)と離れ(はなれ)て工場の探検(たんけん)をしてしまう。プレイヤーはある異変(いへん)に気づいた。工場内がどんどん暑く(あつく)なっていくのだ。耐えがたい(たえがたい)環境(かんきょう)になっていくので急い(いそい)で集団(しゅうだん)と合流(ごうりゅう)しようと決め(きめ)たとき、奴(やつ)が暴れだし(あばれだし)た。
      </Text>
      <BodyHeding>ゲームを開始する前に</BodyHeding>

      <MainCard
        list={[
          {
            title: '紙とペンを用意(ようい)しよう！',
            description:
              'メモをとるための紙と筆記用具(ひっきようぐ)をお手元にご準備(ごじゅんび)ください。',
          },
          {
            title: 'コミュニケーションをちゃんと取ろ(とろ)う',
            description:
              '2人でゲームを進め(すすめ)ていくので、情報(じょうほう)共有(きょうゆう)はしっかりと行ってください。',
          },
        ]}
      />
      <PloblempageImg img="/StageAssets/index/image2.png" />
      <Button
        mt="2"
        variant="black"
        w="full"
        onClick={() => {
          handleClick({ isCorrect: true, NotShowToast: true })
        }}
        // as="a"
      >
        準備(じゅんび)OK？では、ゲームスタート！！！{' '}
      </Button>
    </div>
  )
}

export default Home
