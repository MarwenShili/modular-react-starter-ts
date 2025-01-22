import { memo, useMemo } from 'react'
import { IColumnsInfo } from '../../types'
import { Button, Divider, Space } from 'antd'
import { useAppDispatch, useAppSelector } from '../../store'
import InputRange from '../ColumnType/InputRange'
import Input from '../ColumnType/Input'
import Select from '../ColumnType/Select'
import Date from '../ColumnType/Date'
import DateRange from '../ColumnType/DateRange'
import BooleanType from '../ColumnType/BooleanType'
import { handleChange } from '../../store/slices/dataSlice'

const Filters = ({ functions }: any) => {
  const { columnsInfo, filterValues, query, searchValues } = useAppSelector((state) => state.data)
  const dispatch = useAppDispatch()
  const columnType = useMemo(
    () => ({
      dateTimeRange: (expression: IColumnsInfo) => <DateRange expression={expression} />,
      dateRange: (expression: IColumnsInfo) => <DateRange expression={expression} />,
      dateTime: (expression: IColumnsInfo) => <Date expression={expression} />,
      date: (expression: IColumnsInfo) => <Date expression={expression} />,
      multiSelect: (expression: IColumnsInfo) => (
        <Select expression={expression} multiple={true} functions={functions} />
      ),
      monoSelect: (expression: IColumnsInfo) => (
        <Select functions={functions} expression={expression} multiple={false} />
      ),
      numberRange: (expression: IColumnsInfo) => <InputRange expression={expression} />,
      number: (expression: IColumnsInfo) => <Input expression={expression} />,
      string: (expression: IColumnsInfo) => <Input expression={expression} />,
      boolean: (expression: IColumnsInfo) => <BooleanType expression={expression} />,
      default: () => {
        return
      },
    }),
    [],
  )
  const switchFn =
    (lookupObject: any, defaultCase = '_default') =>
    (expression: IColumnsInfo) => {
      const filterType = expression?.filterType
      if (filterType && filterType in lookupObject) {
        return lookupObject[filterType](expression)
      }
      return lookupObject[defaultCase](expression)
    }

  const columnSwitch = switchFn(columnType, 'default')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    //Apply filters using page 1
    dispatch(
      handleChange({
        key: 'query',
        value: {
          ...query,
          page: 1,
        },
      }),
    )
    functions.getAll({
      ...query,
      filters: filterValues,
      search: searchValues?.search,
      searchBy: searchValues?.searchBy,
      page: 1,
    })
  }

  // useEffect(() => {
  //   if (!filterValues || Object.keys(filterValues).length === 0) {
  //     return
  //   }
  //   functions.getAll({
  //     ...query,
  //     filters: filterValues,
  //   })
  // }, [filterValues])

  const handleReset = () => {
    dispatch(
      handleChange({
        key: 'filterValues',
        value: {},
      }),
    )
    functions.getAll({
      ...query,
      filters: null,
    })
  }

  return (
    <form className="dynamic_table_filter" onSubmit={handleSubmit}>
      <div className="dynamic_table_filter_inputs">
        {columnsInfo?.map((item: IColumnsInfo, index: number) => {
          if ('filterType' in item && item?.filterType !== 'default')
            return (
              <div className="filter-item" key={index}>
                {columnSwitch(item)}
              </div>
            )
        })}
      </div>

      <Divider />

      <Space className="dynamic_table_filter_btns">
        <Button className="btn-table-primary" type="primary" htmlType="submit">
          Apply Filter
        </Button>
        {/* <Button onClick={handleExport} className="btn-table-primary" type="primary">
          Export
        </Button> */}
        <Button onClick={handleReset} className="btn-table-secondary" htmlType="reset">
          Reset
        </Button>
      </Space>
    </form>
  )
}

export default memo(Filters)
