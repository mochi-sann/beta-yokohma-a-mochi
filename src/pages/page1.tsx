import React from 'react'
import Problems from '~/src/components/Problems/Problems'
import HintList from '~/src/components/HintList'
export const Home: React.VFC = () => {
  return (
    <div>
      <p>いちもんめ</p>

      <Problems
        nextPage="/page2"
        correctList={[
          {
            title: 'タイトル1',
            correctText: 'aaa',
            type: 'text',
          },
          {
            title: 'タイトル2',
            correctText: 'aaa',
            type: 'text',
          },
          {
            title: 'タイトル1',
            correctText: 'aaa',
            type: 'text',
          },
        ]}
      />
      <HintList
        HintLists={[
          { title: 'ひんと1', body: 'ああああああああああああああ' },
          { title: 'ひんと2', body: 'Welcome' },
        ]}
      />
    </div>
  )
}

export default Home
