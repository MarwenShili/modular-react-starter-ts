import { Button, Tag } from 'antd'
import { ControlOutlined, FilterOutlined, PlusCircleOutlined } from '@ant-design/icons'
import Columns from '../Columns/Columns'
import Filters from '../Filters/Filters'
import { useAppDispatch, useAppSelector } from '../../store'
import { IAppProps } from '../../types/types'
import Search from '../Search/Search'
import { useNavigate } from 'react-router-dom'
import { handleChange } from '../../store/slices/dataSlice'

const Header = ({ options, functions }: IAppProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { name, columnsInfo, routes, type, query, filterValues, searchValues } = useAppSelector(
    (state) => state.data,
  )

  const handleChangeType = (newType: string) => {
    dispatch(handleChange({ key: 'type', value: newType === type ? null : newType }))
  }

  const handleCreate = () => {
    if (routes?.create) {
      navigate(routes.create)
    }
  }

  const handleExport = () => {
    if (functions?.onExport) {
      functions?.onExport({
        ...query,
        filters: filterValues,
        search: searchValues?.search,
        searchBy: searchValues?.searchBy,
      })
    }
  }

  return (
    <div className="header_container">
      <div className="header_container_info">
        <div className="header_container_info_title_tag">
          <h1 className="header_container_info_title">{name}'s List</h1>
          {options.metadata?.count && (
            <Tag color="processing" className="header_container_info_tag">
              {options.metadata?.count}
            </Tag>
          )}
        </div>

        {options?.canExport ? (
          <Button
            onClick={handleExport}
            icon={<PlusCircleOutlined />}
            size={'large'}
            className="btn-table-secondary"
          >
            Export
          </Button>
        ) : null}
      </div>

      <div className="header_container_filter">
        <Search columnsInfo={columnsInfo} functions={functions} />

        <div className="header_container_filter_btns">
          <Button
            icon={<ControlOutlined />}
            size={'large'}
            onClick={() => handleChangeType('Columns')}
            className="btn-table-secondary"
          >
            Columns
          </Button>
          <Button
            icon={<FilterOutlined />}
            size={'large'}
            onClick={() => handleChangeType('Filters')}
            className="btn-table-secondary"
          >
            Filters
          </Button>
          {routes && 'create' in routes && (
            <Button
              type="primary"
              icon={<PlusCircleOutlined />}
              size={'large'}
              onClick={handleCreate}
              className="btn-table-primary"
            >
              Add
            </Button>
          )}
        </div>
      </div>

      {type === 'Columns' ? (
        <div className="header_container_filter_component_type">
          <Columns />
        </div>
      ) : type === 'Filters' ? (
        <div className="header_container_filter_component_type">
          <Filters functions={functions} />
        </div>
      ) : null}
    </div>
  )
}

export default Header
