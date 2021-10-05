import useForm from '../hooks/useForm'
import CardForm from './CardForm'
import ErrorText from './ErrorText'
import Input from './Input'
import { Errors } from './Types'

interface LoginFormProps {
  onSubmit: () => {}
}

const sleep = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit: async () => {
      await sleep()
      console.log('Submit')
    },
    validate: ({ name, password }) => {
      const newErrors = { name: '', password: '' } as Errors
      if (!name) newErrors.name = '이름을 입력해주세요.'
      if (!password) newErrors.password = '비밀번호를 입력해주세요.'
      return newErrors
    },
  })

  return (
    <CardForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}

      <button type="submit" disabled={isLoading}>
        Login
      </button>
    </CardForm>
  )
}

export default LoginForm
