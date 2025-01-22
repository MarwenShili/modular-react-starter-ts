import { DatePicker } from 'antd'
import { IColumnsInfo } from '../../types'
import { useAppDispatch, useAppSelector } from '../../store'
import { handleChangeFilters } from '../../store/slices/dataSlice'

const { RangePicker } = DatePicker

interface IDateRangeProps {
  expression: IColumnsInfo
}

const DateRange = ({ expression }: IDateRangeProps) => {
  const { filterValues } = useAppSelector((state) => state.data)
  const dispatch = useAppDispatch()

  const handleChange = (dates: any) => {
    if (dates) {
      const [startDate, endDate] = dates
      const formattedRange = {
        startDate: startDate ? startDate.format('YYYY-MM-DD') : null,
        endDate: endDate ? endDate.format('YYYY-MM-DD') : null,
      }

      dispatch(
        handleChangeFilters({
          ...filterValues,
          startdate: formattedRange.startDate,
          enddate: formattedRange.endDate,
        }),
      )
    } else {
      console.log('No dates selected')
    }
  }

  return (
    <div className="dynamic_table_column_type_date_range">
      <div className="dynamic_table_column_type_date_range_item">
        <label htmlFor={expression.id + '-1'}>{expression.label}</label>
        <RangePicker
          format="YYYY-MM-DD"
          id={`${expression.id}-1`}
          size="large"
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default DateRange
