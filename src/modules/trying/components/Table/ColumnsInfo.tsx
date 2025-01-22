/* eslint-disable @typescript-eslint/no-explicit-any */
// import { getCountries, getSchools } from '../dashboard/data/dashboardThunk'
import { FilterTypeEnum, IColumnsInfo } from '../../../shared/packages/dynamic-table/types'

export const columnsInfo: IColumnsInfo[] = [
  {
    id: 'fullname',
    label: 'Name',
    hidden: false,
    sortable: true,
    searchable: true,
    returns: (item: any) => <span>{item?.fullname || '__'}</span>,
  },
  {
    id: 'email',
    label: 'Email',
    hidden: false,
    sortable: true,
    searchable: true,
    returns: (item: any) => <span>{item?.email || '__'}</span>,
  },

  // {
  //   id: 'school',
  //   label: 'School',
  //   hidden: false,
  //   sortable: true,
  //   searchable: false,
  //   filterType: FilterTypeEnum.MultiSelect,
  //   fetchFn: getSchools,
  //   fetchHookLabelAttrbuteName: 'name',
  //   returns: (item: any) => <span>{item?.school || '__'}</span>,
  // },
  {
    id: 'country',
    label: 'Country',
    hidden: false,
    sortable: false,
    searchable: false,
    filterType: FilterTypeEnum.MonoSelect,
    options: [
      { label: 'USA', value: '123' },
      { label: 'Canada', value: '1234' },
    ],
    fetchHookLabelAttrbuteName: 'name',
    returns: (item: any) => <span>{item?.country || '__'}</span>,
  },
  {
    id: 'score',
    label: 'Score',
    hidden: false,
    sortable: true,
    searchable: true,
    returns: (item: any) => <span>{item?.score || '__'}</span>,
  },

  // {
  //   id: 'school',
  //   label: 'Type school',
  //   hidden: true,
  //   sortable: true,
  //   searchable: false,
  //   filterType: FilterTypeEnum.String,
  //   fetchHookLabelAttrbuteName: 'name',
  //   returns: (item: any) => <span>{item?.organization || '__'}</span>,
  // },
  {
    id: 'range_of_dates',
    label: 'Range of dates',
    invisible: true,
    hidden: true,
    sortable: false,
    searchable: false,
    filterType: FilterTypeEnum.DateRange,
    returns: () => <span>__</span>,
  },
]
