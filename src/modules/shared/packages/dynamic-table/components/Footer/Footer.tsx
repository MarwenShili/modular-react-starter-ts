import { useAppDispatch, useAppSelector } from '../../store'
import { handleChange } from '../../store/slices/dataSlice'
import { IFunctionsOptions, IMetadata } from '../../types/types'
import { Pagination, Skeleton, Space } from 'antd'

interface IFooterProps {
  metadata: IMetadata | null
  functions: IFunctionsOptions
}

const Footer = ({ metadata, functions }: IFooterProps) => {
  const dispatch = useAppDispatch()
  const { query } = useAppSelector((state) => state.data)

  const onChange = (page: number, pageSize: number) => {
    functions.getAll({
      page,
      limit: pageSize,
    })

    dispatch(
      handleChange({
        key: 'query',
        value: {
          ...query,
          page,
          limit: pageSize,
        },
      }),
    )
  }

  if (!metadata) {
    return null
  }

  return (
    <div className="footer_container">
      {metadata ? (
        <Pagination
          current={metadata?.current_page_number}
          pageSize={metadata?.limit}
          total={metadata?.count}
          showSizeChanger
          showQuickJumper
          showLessItems
          onChange={onChange}
          pageSizeOptions={[1, 5, 10, 20, 50, 100]}
        />
      ) : (
        <Space>
          <Skeleton.Button active={true} size={'default'} shape={'default'} block={false} />
          <Skeleton.Button active={true} size={'default'} shape={'default'} block={false} />
          <Skeleton.Button active={true} size={'default'} shape={'default'} block={false} />
        </Space>
      )}
    </div>
  )
}

export default Footer
