import { useForm } from 'react-hook-form'
import React from 'react'
import { FormLabel, FormControl, Input, Button } from '@chakra-ui/react'
import { validationJudgment } from '~/src/lib/validationJudgment'
import useNextPage from '~/src/hooks/useNextPage'

export type Props = {
  correctList: { title: string; correctText: string; type: 'text' }[]
  Done?: () => void
  nextPage?: string
}
type Inputs = {
  name: string[]
}

const Problems: React.VFC<Props> = (props) => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<Inputs>()

  const { handleClick } = useNextPage({ nextPage: props.nextPage || '/page1' })

  function onSubmit(values: Inputs) {
    console.log(values.name)
    console.log(props.correctList)
    handleClick({
      isCorrect: validationJudgment({
        CollectList: props.correctList,
        FormList: values.name,
      }),
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {props.correctList.map((correct, key) => (
          <FormControl key={key}>
            <FormLabel htmlFor="name" fontWeight="800">
              {correct.title}
            </FormLabel>
            <Input
              id={`name.${key}`}
              placeholder={correct.title}
              {...register(`name.${key}`, {
                required: '入力されていません',
              })}
            />
          </FormControl>
        ))}

        <Button
          w="full"
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default Problems
