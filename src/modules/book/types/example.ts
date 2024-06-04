export interface IBook {
  id: number
  name: string
  slug?: string
  is_closed?: boolean
  order: number
  project_id: number
  color?: string
  is_archived?: boolean
  wip_limit?: string
}
export interface IPointStatus {
  id: number
  name: string
  order: number
  project_id: number
  value?: number | null
}
