import { Button } from '@chakra-ui/button'
import React from 'react'
import useNextPage from '~/src/hooks/useNextPage'
import { FaArrowRight } from 'react-icons/fa'
export type Props = {
  Nextpath: string
}

const stageClearNextPageButton: React.VFC<Props> = (props) => {
  const { handleClick } = useNextPage({})
  const { Nextpath } = props
  return (
    <>
      <Button
        fontSize="lg"
        py="6"
        w="full"
        variant="black"
        rightIcon={<FaArrowRight />}
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
        次のステージに移動
      </Button>
    </>
  )
}

export default stageClearNextPageButton
