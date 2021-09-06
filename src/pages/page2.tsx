import React from 'react'
import Problems from '~/src/components/Problems/Problems'

export const Home: React.VFC = () => {
  return (
    <div>
      <Problems
        nextPage="/page1"
        correctList={[
          {
            title: 'タイトル1',
            correctText: 'aaa',
            type: 'text',
          },
          {
            title: 'タイトル2',
            correctText: 'iii',
            type: 'text',
          },
          {
            title: 'タイトル1',
            correctText: 'uuu',
            type: 'text',
          },
        ]}
      />
    </div>
  )
}

export default Home
