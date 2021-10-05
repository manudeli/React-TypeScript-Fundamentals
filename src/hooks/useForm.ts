import { FormEvent, useState } from 'react'
import { Errors } from '../components/Types'

type Object = { name: string; password: string }

interface UseFormProps {
  initialValues: Object
  onSubmit: () => void
  validate: (values: Object) => Object
}

interface handleChangeEvent {
  target: { name: string; value: string }
}

const useForm = ({
  initialValues,
  onSubmit,
  validate,
}: UseFormProps): {
  values: Object
  errors: Errors
  isLoading: boolean
  handleChange: ({ target: { name, value } }: handleChangeEvent) => void
  handleSubmit: (e: FormEvent) => Promise<void>
} => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({ name: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = ({ target: { name, value } }: handleChangeEvent) => {
    setValues({ ...values, [name]: value })
  }
  const handleSubmit = async (e: FormEvent) => {
    setIsLoading(true)

    e.preventDefault()
    const newErrors = validate(values)

    if (Object.keys(newErrors).filter((error) => error.length > 0).length) {
      await onSubmit()
    }
    setErrors(newErrors)

    setIsLoading(false)
  }

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  }
}

export default useForm
