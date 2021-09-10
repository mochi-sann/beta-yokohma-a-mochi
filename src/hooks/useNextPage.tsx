import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'
export type Props = {
  nextPage?: string
}

type handleClickProps = {
  isCorrect: boolean
  CorrecttoastTitle?: string
  CorrecttoastBody?: string
  NotShowToast?: boolean
  notPush?: boolean
  nextPagePath?: string
}

const useNextpage = (props: Props) => {
  const router = useRouter()
  const toast = useToast()
  const { nextPage } = props

  const handleClick = (props: handleClickProps) => {
    if (props.isCorrect) {
      if (!props.NotShowToast) {
        // toastを表示しない
        toast({
          title: props.CorrecttoastTitle || '正解です次の問題に行きましょう',
          description:
            props.CorrecttoastBody ||
            'You have successfully completed this page',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      }

      if (
        !props.notPush ||
        (!props.notPush && (props.nextPagePath || nextPage))
      ) {
        router.push(props.nextPagePath || nextPage)
      }
    } else {
      toast({
        title: '答えが間違っています',
        description: 'もう一度考えてみましょう',
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  return { handleClick }
}

export default useNextpage
