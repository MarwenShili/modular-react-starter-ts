import { DynamicTable } from '@src/modules/shared/packages'
import { columnsInfo } from './ColumnsInfo'
import { useState } from 'react'

const dummyData: any = [
  {
    id: Math.random(),
    fullname: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+380971234567',
    scores: 100,
    country: 'USA',
  },
  {
    id: Math.random(),
    fullname: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+380971234567',
    scores: 100,
    country: 'USA',
  },
  {
    id: Math.random(),
    fullname: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+380971234567',
    scores: 100,
    country: 'USA',
  },
]

function Table() {
  const metadata = null
  const isLoading = false
  const [data, setData] = useState<any[]>(dummyData)

  const deleteFunction = () => {
    console.log('deleteFunction')
  }
  const deleteManyFunction = () => {
    console.log('deleteManyFunction')
  }
  const handleExport = () => {
    console.log('handleExport')
  }
  const fetchFunction = (query: any) => {
    console.log('fetchFunction', query)
    setData(dummyData)
  }
  return (
    <div>
      <DynamicTable
        options={{
          name: 'Scores',
          columnsInfo,
          data: data,
          metadata,
          isLoading,
          canExport: true,
          rowKey: 'id',
        }}
        functions={{
          getAll: fetchFunction,
          get: () => alert('get'),
          edit: () => alert('edit'),
          delete: deleteFunction,
          deleteMany: deleteManyFunction,
          onExport: handleExport,
        }}
        routes={{
          preview: '/scores/preview/:id',
          create: '/scores/create',
          edit: '/scores/edit/:id',
        }}
      />
    </div>
  )
}

export default Table
