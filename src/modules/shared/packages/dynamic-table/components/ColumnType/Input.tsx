import { Input as AntdInput } from 'antd'
import { IColumnsInfo } from '../../types'
import { useAppDispatch, useAppSelector } from '../../store'
import { handleChange } from '../../store/slices/dataSlice'

interface IInputProps {
  expression: IColumnsInfo
}

const Input = ({ expression }: IInputProps) => {
  const dispatch = useAppDispatch()

  const id = expression?.id
  const { filterValues } = useAppSelector((state) => state.data)

  const handleInputChange = (e: any) => {
    dispatch(
      handleChange({
        key: 'filterValues',
        value: {
          ...filterValues,
          ...{
            [id]: e.target.value,
          },
        },
      }),
    )
  }
  return (
    <>
      <label htmlFor={expression.id}>{expression.label}</label>
      <AntdInput
        onChange={handleInputChange}
        id={expression.id}
        placeholder={expression.label}
        size="large"
      />
    </>
  )
}

export default Input
