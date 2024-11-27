import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import ModalExample from '../ModalExample/ModalExample'
import { closeModal } from '../../store/slices/modal/modalSlice'

const ModalsProvider = () => {
  const { modals } = useSelector((state: RootState) => state.modal)
  const dispatch = useDispatch()

  const modalState = (id: string, key: string) => {
    const res = modals?.find((modal) => modal.id === id) as any
    return res ? res[key] : null
  }

  const handleClose = (id: string) => {
    dispatch(closeModal(id))
  }

  return (
    <>
      <ModalExample
        id="modal-example"
        open={modalState('modal-example', 'open')}
        data={modalState('modal-example', 'data')}
        handleClose={handleClose}
      />
    </>
  )
}

export default ModalsProvider
