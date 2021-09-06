import React from 'react'
import Problems from '~/src/components/Problems/Problems'

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
    </div>
  )
}

export default Home
