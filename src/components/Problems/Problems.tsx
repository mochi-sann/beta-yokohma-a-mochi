import React from 'react'

export type Props = {
  correctList: string[]
}

const Problems: React.VFC<Props> = (props) => {
  return (
    <div>
      <p>hZuwOlGOwBZADA8EyDYyjx3</p>
      {props.correctList.map((correct, index) => (
        <p key={index}>{correct}</p>
      ))}
    </div>
  )
}

export default Problems
