import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import ModalExample from '../ModalExample/ModalExample'
import AddNewBook from '@src/modules/book/modals/AddNewBook/AddNewBook'
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
      <AddNewBook
        id="add-new-book"
        open={modalState('add-new-book', 'open')}
        data={modalState('add-new-book', 'data')}
        handleClose={handleClose}
      />
    </>
  )
}

export default ModalsProvider
