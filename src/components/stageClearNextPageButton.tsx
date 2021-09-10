import { Button } from '@chakra-ui/button'
import React from 'react'
import useNextPage from '~/src/hooks/useNextPage'

export type Props = {
  Nextpath: string
}

const stageClearNextPageButton: React.VFC<Props> = (props) => {
  const { handleClick } = useNextPage({})
  const { Nextpath } = props
  return (
    <>
      <Button
        w="full"
        variant="black"
        onClick={() => {
          handleClick({
            nextPagePath: Nextpath,
            isCorrect: true,
            NotShowToast: true,
          })
        }}
        variantColor="green"
        {...props}
      >
        次のステージに行く
      </Button>
    </>
  )
}

export default stageClearNextPageButton
