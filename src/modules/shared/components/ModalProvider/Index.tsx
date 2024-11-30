import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import ModalExample from '../ModalExample/ModalExample'
import { closeModal } from '../../store/slices/modal/modalSlice'
import DrawerExample from '../DrawerExample/DrawerExample'
import ThemeSettings from '../../features/ThemeSettings/ThemeSettings'
import UserProfile from '../UserProfile/UserProfile'
import NotificationsDrawer from '@src/modules/notification/Notification'
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
      <DrawerExample
        id="drawer-example"
        open={modalState('drawer-example', 'open')}
        data={modalState('drawer-example', 'data')}
        handleClose={handleClose}
      />
      <ThemeSettings
        id="theme-settings"
        open={modalState('theme-settings', 'open')}
        data={modalState('theme-settings', 'data')}
        handleClose={handleClose}
      />
      <UserProfile
        id="user-profile"
        open={modalState('user-profile', 'open')}
        data={modalState('theme-settings', 'data')}
        handleClose={handleClose}
      />
      <NotificationsDrawer
        id="notification-drawer"
        open={modalState('notification-drawer', 'open')}
        data={modalState('notification-drawer', 'data')}
        handleClose={handleClose}
      />
    </>
  )
}

export default ModalsProvider
