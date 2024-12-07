import { Checkbox } from 'antd'
import { handleChangeFilters } from '../../store/slices/dataSlice'
import { useAppDispatch, useAppSelector } from '../../store'
import { IColumnsInfo } from '../../types'

const BooleanType = ({ expression }: { expression: IColumnsInfo }) => {
  const { filterValues } = useAppSelector((state) => state.data)
  const dispatch = useAppDispatch()
  const onChange = (value: boolean) => {
    dispatch(handleChangeFilters({ ...filterValues, [expression.id]: value }))
  }

  return (
    <div className="boolean-item">
      <label htmlFor="">{expression?.label}</label>
      <div className="boolean-type">
        <Checkbox onChange={(event) => onChange(event?.target.checked)} />
      </div>
    </div>
  )
}

export default BooleanType
