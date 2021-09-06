import { useForm } from 'react-hook-form'
import React from 'react'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'

export type Props = {
  correctList: { correct: string; type: 'text' }[]
  Done: () => void
}

const Problems: React.VFC<Props> = (props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise(() => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
      }, 3000)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">First name</FormLabel>
          <Input
            id="name"
            placeholder="name"
            {...register('name', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
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
