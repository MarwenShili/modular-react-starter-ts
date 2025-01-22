import { useAppDispatch } from '../../store'
import { useEffect } from 'react'
import { IAppProps } from '../../types/types'
import Header from '../Header/Header'
import { initialise } from '../../store/slices/dataSlice'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'

const Main = ({ options, functions, routes }: IAppProps) => {
  const dispatch = useAppDispatch()
  const { name, columnsInfo } = options

  useEffect(() => {
    dispatch(
      initialise({
        name,
        columnsInfo,
        routes,
      }),
    )
    // functions.getAll(query)
    //Apply fetch using the initial query
    functions.getAll({
      page: 1,
      limit: 10,
      orderBy: '',
      order: '',
      search: '',
      searchBy: '',
    })
  }, [])

  return (
    <div className="main_container">
      <Header options={options} functions={functions} />
      <Body options={options} functions={functions} />
      <Footer metadata={options?.metadata} functions={functions} />
    </div>
  )
}

export default Main
