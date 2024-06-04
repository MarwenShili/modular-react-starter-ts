import Button from '../shared/components/Button/Button'
import { useAppDispatch } from '../shared/store'
import { openModal } from '../shared/store/slices/modal/modalSlice'

const Dashboard = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="dashboard-page">
      <Button onClick={() => dispatch(openModal({ id: 'modal-example' }))}>
        open Modal example
      </Button>
    </div>
  )
}

export default Dashboard
