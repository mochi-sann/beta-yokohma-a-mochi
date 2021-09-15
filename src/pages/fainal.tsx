import { Text } from '@chakra-ui/react'
import React from 'react'
import HowToCook from '../components/howToCook'

export const Home: React.VFC = () => {
  return (
    <div>
      <Text>
        STAGE:3 クリア! 答えは、「冷却」
        納豆たちは、油の中に落ちて納豆揚げになってしまった。
        みんなで出口に出ることができた!!
      </Text>

      <Text>
        ここで、おうちで作る納豆の作り方と、簡単で美味しいアレンジレシピを紹介するよ!
        (納豆の作り方と納豆揚げのアレンジレシピの画像を貼る)
      </Text>

      <HowToCook
        title="①大豆の入荷"
        imagesrc="/StageAssets/final/image1.png"
        body="国内、海外で大豆を育てる
          納豆の原料となる大豆。実は、日本だけでなく、海外でも契約栽培されている。アメリカやカナダの広い大地で、大切に大豆を育てているそう。"
      />
      <HowToCook
        title="②大豆の育て方"
        imagesrc="/StageAssets/final/image2.png"
        body="異物（普通とは違ったもの）を取り除いたり粒径を揃える
入荷した大豆は細かく品質をチェックして納豆用に厳選する。
こうしてより選った大豆から、小石や色豆などの異物を取り除き、粒の大きさ別に分ける。"
      />
      <HowToCook
        title="③洗浄​​"
        imagesrc="/StageAssets/final/image6.png"
        body="厳選した大豆をきれいに洗浄
選別された大豆は水流を利用して洗う。"
      />
      <HowToCook
        title="④浸漬"
        imagesrc="/StageAssets/final/image2.png"
        body="大豆を水に浸す
大豆を一定の温度の水に20時間前後浸す。
浸すことで水を吸って2倍くらいの大きさに膨れる。"
      />
      <HowToCook
        title="⑤蒸煮・納豆菌接種"
        imagesrc="/StageAssets/final/image4.png"
        body="蒸して煮豆にしたら納豆菌をスプレー
大豆を『蒸煮釜』と呼ばれる大きな釜で蒸すことで煮豆が出来上がる。蒸すことには殺菌効果もある。この煮豆に、納豆菌をムラのないようにスプレーしていく"
      />
      <Text>
        ぜひおうちの人と作ってみてね! 遊んでくれてありがとう! ゲームの制作、企画
        (名前)
      </Text>
    </div>
  )
}

export default Home
