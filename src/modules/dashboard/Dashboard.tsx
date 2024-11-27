import Button from '../shared/components/Button/Button'
import { useAppDispatch } from '../shared/store'
import { openModal } from '../shared/store/slices/modal/modalSlice'

const Dashboard = () => {
  const dispatch = useAppDispatch()

  // const { data: requests, isLoading } = useQuery({
  //   queryKey: ['all-requests'],
  //   queryFn: () => fetchTodos(),
  // })

  // const fetchTodos = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok')
  //   }
  //   return response.json()
  // }

  return (
    <div className="dashboard-page">
      <Button onClick={() => dispatch(openModal({ id: 'modal-example' }))}>
        open Modal example
      </Button>
      <Button onClick={() => dispatch(openModal({ id: 'drawer-example' }))}>
        open Drawer example
      </Button>
      <Button onClick={() => dispatch(openModal({ id: 'theme-settings' }))}>
        open Theme Settings
      </Button>
    </div>
  )
}

export default Dashboard
