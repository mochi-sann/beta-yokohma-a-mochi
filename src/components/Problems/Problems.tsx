import { useForm } from 'react-hook-form'
import React from 'react'
import { FormLabel, FormControl, Input, Button } from '@chakra-ui/react'

export type Props = {
  correctList: { title: string; correctText: string; type: 'text' }[]
  Done: () => void
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

  function onSubmit(values) {
    console.log(values)
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
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>

      <p>hogehoge</p>
      {props.correctList.map((correct, index) => (
        <p key={index}>{JSON.stringify(correct)}</p>
      ))}
    </div>
  )
}

export default Problems
