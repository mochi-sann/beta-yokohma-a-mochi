import { Text } from '@chakra-ui/layout'
import React from 'react'

import StageClearNextPageButton from '~/src/components/stageClearNextPageButton'

export const Home: React.VFC = () => {
  return (
    <div>
      <Text>
        ドアが空いた! 納豆たちに追いつかれないよう、出口に向かおう。
        <br /> 6充てん 煮豆をパックに入れる
        <br />
        煮豆を容器に盛り込み、自動でタレ・からしを入れる。合わせて計量装置で重さもチェック!
        <br />
        7発酵・熟成 発酵させて納豆に変身!
        <br />
        この発酵室は、コンピューターで管理されている。煮豆はこの中で最適な条件で発酵され、ようや
        <br />
        く納豆へと変わる。発酵後は、冷蔵庫でじっくりと熟成させる。
        <br /> 8包装 ラベルをかけて金属探知機へ
        <br />
        冷蔵庫で熟成された納豆に、製品ラベルがかけられる。ここでは金属探知機を使って最終チェッ
        クがしっかり行われる。
        <br /> 9出荷 新鮮で美味しい納豆を全国へ配送
        新鮮で安心できる納豆を、冷蔵車に乗せ全国へスピーディーにお届けしている。
      </Text>
      <StageClearNextPageButton Nextpath="/page3" />
    </div>
  )
}

export default Home
