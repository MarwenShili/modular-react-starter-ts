import { ReactNode } from 'react'
import { FilterTypeEnum } from './filter'

export interface ReduxProviderProps {
  children: ReactNode
}

export interface IColumnsInfo {
  id: string
  label: string
  hidden: boolean
  sortable: boolean
  searchable: boolean
  filterType?: FilterTypeEnum
  returns?: (item: any) => ReactNode
  fetchHook?: any
  options?: any
  placeholder?: string
  fetchHookLabelAttrbuteName?: any
  fetchFn?: any
  filterKey?: string
  invisible?: boolean
}

export interface IMetadata {
  current_page_number: number
  next_page_number: number
  previous_page_number: number
  offset: number
  limit: number
  total_pages: number
  count: number
  previous: string
  next: string
}

export interface IAppOptions {
  name: string
  columnsInfo?: IColumnsInfo[]
  data: any
  metadata: IMetadata | null
  isLoading: boolean
  rowKey?: string
  canExport?: boolean
}

export interface IFunctionsOptions {
  getAll: any
  get?: any
  edit?: any
  delete?: any
  deleteMany?: any
  onExport?: any
}

export interface IRoutesOptions {
  create?: string
  edit?: string
  preview?: string
}

export interface IAppProps {
  options: IAppOptions
  functions: IFunctionsOptions
  routes?: IRoutesOptions
}

export interface IQuery {
  page: number
  limit: number
  order: string
  orderBy: string
  search: string
  searchBy: string
}
