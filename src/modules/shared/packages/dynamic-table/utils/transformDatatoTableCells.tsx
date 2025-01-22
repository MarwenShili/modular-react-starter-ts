import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons'
import { handleChange } from '../store/slices/dataSlice'
import DropdownAction from '../components/DropdownAction/DropdownAction'

export function transformDatatoTableCells({
  dispatch,
  name,
  columnsInfo,
  columnsInfoSwitches,
  query,
  functions,
}: any) {
  const action = {
    id: 'action',
    label: <div className="table_title_box_text_action">Action</div>,
    returns: (item: any) => {
      return <DropdownAction item={item} functions={functions} />
    },
  }

  const handleSort = (item: any) => {
    const order = item?.id !== query?.orderBy ? 'desc' : query?.order === 'asc' ? 'desc' : 'asc'

    functions.getAll({
      ...query,
      orderBy: item?.id,
      order,
    })

    dispatch(
      handleChange({
        key: 'query',
        value: {
          ...query,
          orderBy: item?.id,
          order,
        },
      }),
    )
  }

  const getFirstRowIndex = (index: number) => {
    return columnsInfoSwitches?.[name]?.findIndex((value: any) => value === false) === index
  }

  return (
    (columnsInfo &&
      [...columnsInfo, action]?.map((item, index) => ({
        key: item?.id,
        title: item?.sortable ? (
          <div
            className={`table_title_box ${getFirstRowIndex(index) ? 'table_title_box_first' : ''}`}
            onClick={() => handleSort(item)}
          >
            <div className="table_title_box_text">{item?.label}</div>
            <div className="table_title_box_sort">
              {query?.orderBy !== item?.id ? (
                <SortAscendingOutlined />
              ) : query?.order === 'asc' ? (
                <SortAscendingOutlined />
              ) : (
                <SortDescendingOutlined />
              )}
            </div>
          </div>
        ) : (
          <div className="table_title_box_text">{item?.label}</div>
        ),
        label: item?.label,
        render: item?.returns !== null ? (_: any, record: any) => item?.returns(record) : null,
        dataIndex: item?.id,
        hidden: columnsInfoSwitches?.[name]?.[index],
        align: getFirstRowIndex(index) ? 'left' : 'center',
      }))) ||
    []
  )
}
