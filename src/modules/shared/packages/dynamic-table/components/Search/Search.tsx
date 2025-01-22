import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { useAppDispatch, useAppSelector } from '../../store'
import { useEffect, useState } from 'react'
import { IColumnsInfo } from '../../types'
import { handleChange } from '../../store/slices/dataSlice'

const Search = ({ columnsInfo, functions }: any) => {
  const dispatch = useAppDispatch()

  const { query, filterValues } = useAppSelector((state) => state.data)
  const [search, setSearch] = useState<{ ids: string; labels: string }>({ ids: '', labels: '' })

  const getSearchPlaceholder = () => {
    const searchableColumnsInfo = columnsInfo?.filter((column: IColumnsInfo) => column.searchable)
    let ids = ''
    let labels = ''

    searchableColumnsInfo?.map((column: IColumnsInfo, index: number) => {
      ids += `${column.id}${searchableColumnsInfo.length !== index + 1 ? ',' : ''}`
      labels += `${column.label}${searchableColumnsInfo.length !== index + 1 ? ', ' : ''}`
    })

    setSearch({
      ids,
      labels,
    })
  }

  const onChange = (e: any) => {
    dispatch(
      handleChange({
        key: 'searchValues',
        value: {
          search: e.target.value,
          searchBy: search.ids,
        },
      }),
    )
    // Apply search using page 1
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
      search: e.target.value,
      searchBy: search.ids,
      filters: filterValues,
      page: 1,
    })
  }

  useEffect(() => {
    getSearchPlaceholder()
  }, [columnsInfo])

  return (
    <Input
      size="large"
      placeholder={`Search by (${search.labels})...`}
      prefix={<SearchOutlined />}
      onChange={onChange}
    />
  )
}

export default Search
