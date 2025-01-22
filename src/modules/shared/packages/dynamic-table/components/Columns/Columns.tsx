import { handleColumnsHiddenChange } from '../../store/slices/dataSlice'
import { useAppDispatch, useAppSelector } from '../../store'
import { Divider, Switch } from 'antd'

const Columns = () => {
  const dispatch = useAppDispatch()
  const { name, columnsInfo, columnsInfoSwitches } = useAppSelector((state) => state.data)

  const handleColumnChange = (index: number) => {
    dispatch(handleColumnsHiddenChange(index))
  }
  const columns = columnsInfo?.filter((column: any) => !column?.invisible)
  return (
    <div className="header_colomns_switches">
      {columns?.map((column: any, index: number) => {
        return (
          <div key={index} className="header_colomns_switches_item">
            <Switch
              size={'small'}
              checked={!columnsInfoSwitches?.[name]?.[index]}
              onChange={() => handleColumnChange(index)}
              title={column.id}
              id={`column_switch_${column.id}`}
            />
            <label
              className="header_colomns_switches_item_label"
              htmlFor={`column_switch_${column.id}`}
            >
              {column.label}
            </label>
            {columnsInfo.length > index + 1 && <Divider type="vertical" />}
          </div>
        )
      })}
    </div>
  )
}

export default Columns
