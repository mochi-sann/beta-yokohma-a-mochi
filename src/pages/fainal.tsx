import { Text } from '@chakra-ui/react'
import React from 'react'
import HowToCook from '../components/howToCook'

export const Home: React.VFC = () => {
  return (
    <div>
      <Text>
        STAGE:3 クリア!
        こたえは「れいきゃく」！納豆菌(なっとうきん)は強く、100度(ど)以上(いじょう)で10分以上(いじょう)熱し続け(ねっしつづけ)ないと死(し)めつすることはない。工場の人は素直(すなお)じゃないのかまったく逆(ぎゃく)のれいきゃくにしちゃったっぽい。冷やす(ひやす)だけだと活動(かつどう)しなくなるだけで死ぬ(しぬ)わけじゃないのにね。
        納豆(なっとう)たちは、油(あぶら)の中に落ち(おち)て納豆(なっとう)揚げ(あげ)になってしまった。
        みんなで出口に出ることができた!!
      </Text>
      <Text>
        ここで、おうちで作る納豆(なっとう)の作り方と、簡単(かんたん)で美味しい(おいしい)アレンジレシピを紹介(しょうかい)するよ!{' '}
      </Text>
      <HowToCook
        title="①大豆(だいず)の入荷(にゅうか)"
        imagesrc="/StageAssets/final/image1.png"
        body="国内(こくない)、海外(かいがい)で大豆(だいず)を育てる(そだてる)納豆(なっとう)の原料(げんりょう)となる大豆(だいず)。実は(じつは)、日本(にほん)だけでなく、海外(かいがい)でも契約(けいやく)栽培(さいばい)されている。アメリカやカナダの広い(ひろい)大地(だいち)で、大切(たいせつ)に大豆(だいず)を育て(そだて)ているそう。"
      />

      <HowToCook
        title="②大豆(だいず)の育て方(そだてかた)"
        imagesrc="/StageAssets/final/image2.png"
        body="異物(いぶつ)（普通(ふつう)とは違っ(ちがっ)たもの）を取り除い(とりのぞい)たり粒径(りゅうけい)を揃える(そろえる)
入荷(にゅうか)した大豆(だいず)は細かく品質(ひんしつ)をチェックして納豆(なっとう)用に厳選(げんせん)する。
こうしてより選っ(えっ)た大豆(だいず)から、小石や色豆(まめ)などの異物(いぶつ)を取り除き(とりのぞき)、粒(つぶ)の大きさ別(べつ)に分ける。"
      />
      <HowToCook
        title="③洗浄​​(せんじょう)"
        imagesrc="/StageAssets/final/image6.png"
        body="選別(せんべつ)された大豆(だいず)は水流(すいりゅう)を利用(りよう)して洗う(あらう)。"
      />
      <HowToCook
        title="④浸漬(しんせき)"
        imagesrc="/StageAssets/final/image2.png"
        body="大豆(だいず)を水(みず)に浸す(ひたす)
大豆(だいず)を一定(いってい)の温度(おんど)の水(みず)に20時間(じかん)前後(ぜんご)浸す(ひたす)。
浸す(ひたす)ことで水(みず)を吸っ(すっ)て2倍(ばい)くらいの大き(おおき)さに膨れる(ふくれる)。"
      />
      <HowToCook
        title="⑤蒸煮(むしに)・納豆菌(なっとうきん)接種(せっしゅ)"
        imagesrc="/StageAssets/final/image4.png"
        body="蒸し(むし)て煮豆(にまめ)にしたら納豆菌(なっとうきん)をスプレー
大豆(だいず)を『蒸煮(むしに)釜(がま)』と呼ば(よば)れる大きな釜(かま)で蒸す(むす)ことで煮豆(にまめ)が出来上がる。蒸す(むす)ことには殺菌(さっきん)効果(こうか)もある。この煮豆(にまめ)に、納豆菌(なっとうきん)をムラのないようにスプレーしていく
大豆を『蒸煮釜』と呼ばれる大きな釜で蒸すことで煮豆が出来上がる。蒸すことには殺菌効果もある。この煮豆に、納豆菌をムラのないようにスプレーしていく"
      />
      <Text>ぜひおうちの人と作ってみてね! 遊ん(あそん)でくれてありがとう!</Text>
    </div>
  )
}

export default Home
