/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { Select } from 'antd'
import { IColumnsInfo } from '../../types'
import { useAppDispatch, useAppSelector } from '../../store'
import { handleChange } from '../../store/slices/dataSlice'
import { asyncPaginateStyles } from '../../utils/asyncPaginateStyle'

const SelectFilter = ({
  expression,
  multiple,
}: {
  expression: IColumnsInfo
  multiple: boolean
  functions: any
}) => {
  const label = expression?.label
  const id = expression?.id

  const [inputValue, setInputValue] = useState('')

  const dispatch = useAppDispatch()
  const { filterValues } = useAppSelector((state) => state.data)

  const defaultAdditional = {
    page: 1,
  }

  const handleSelectChange = (value: any) => {
    // functions.getAll({
    //   search: value?.[0].id,
    //   searchBy: id,
    // })

    console.log('value', value)

    dispatch(
      handleChange({
        key: 'filterValues',
        value: {
          ...filterValues,
          ...{
            [id]: value,
          },
        },
      }),
    )
  }

  const onChange = (value: any) => {
    handleSelectChange(value)
  }
  const loadPageOptions = async (_: any, _prevOptions: any, { page }: any) => {
    const response = await dispatch(
      expression?.fetchFn({
        search: inputValue,
        limit: 10,
        page,
      }),
    )

    const hasMore =
      response?.payload.meta?.next !== null && response?.payload.meta?.next !== undefined

    return {
      options: response?.payload?.results || [],
      hasMore,
      additional: {
        page: response?.payload?.meta?.current_page_number + 1,
      },
    }
  }

  return (
    <div>
      <p>{label}</p>

      {expression?.fetchFn ? (
        <AsyncPaginate
          isClearable
          additional={defaultAdditional}
          menuPortalTarget={document.body}
          loadOptions={loadPageOptions}
          value={filterValues?.[expression?.id] || (multiple ? [] : '')}
          getOptionValue={(option) => option?.id}
          getOptionLabel={(option) => option?.[expression?.fetchHookLabelAttrbuteName ?? 'id']}
          placeholder={expression?.placeholder}
          onInputChange={(value) => setInputValue(() => value)}
          debounceTimeout={400}
          isMulti={multiple}
          hideSelectedOptions
          closeMenuOnSelect={true}
          onChange={(newValue) => {
            onChange(newValue)
          }}
          styles={asyncPaginateStyles}
        />
      ) : (
        <Select
          data-testid={expression?.id}
          options={expression?.options}
          size="large"
          id={expression?.id}
          className="ant_select_filter"
          placeholder={expression?.placeholder}
          onChange={(val) => {
            onChange(val)
          }}
          value={filterValues?.[expression?.id] || (multiple ? [] : '')}
          mode={multiple ? 'multiple' : undefined}
        />
      )}
    </div>
  )
}

export default SelectFilter
