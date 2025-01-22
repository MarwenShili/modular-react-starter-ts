import { Table } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { transformDatatoTableCells } from '../../utils/transformDatatoTableCells'
import { IAppProps } from '../../types/types'
import DeleteMany from '../DeleteMany/DeleteMany'

const Body = ({ options, functions }: IAppProps) => {
  const dispatch = useAppDispatch()
  const { name, columnsInfo, columnsInfoSwitches, query } = useAppSelector((state) => state.data)

  const [columns, setColumns] = useState(null)
  const [selectedRows, setSelectedRows] = useState<any>([])

  const memoData = useMemo(() => options.data, [options.data])

  const rowSelection = {
    onChange: (selectedRowKeys: any) => {
      setSelectedRows(selectedRowKeys)
    },
  }

  useEffect(() => {
    const result = transformDatatoTableCells({
      dispatch,
      name,
      columnsInfo,
      columnsInfoSwitches,
      query,
      functions,
    })
    setColumns(result)
  }, [options?.isLoading, columnsInfoSwitches, columnsInfo])

  return (
    <div className="body_container">
      {selectedRows?.length > 0 && <DeleteMany selectedRows={selectedRows} functions={functions} />}

      {columns && (
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          columns={columns}
          dataSource={memoData}
          pagination={false}
          rowKey={options?.rowKey ?? 'id'}
          loading={options?.isLoading}
        />
      )}
    </div>
  )
}

export default Body
