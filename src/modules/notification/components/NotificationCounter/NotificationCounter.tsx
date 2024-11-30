import { useAppSelector, useAppDispatch } from '@src/modules/shared/store'
import { openModal } from '@src/modules/shared/store/slices/modal/modalSlice'
import { ReactComponent as NotificationIcon } from '../../assets/icons/notif.svg'

function NotificationCounter() {
  const { notifications } = useAppSelector((state) => state.notification)
  const dispatch = useAppDispatch()
  const handleOpenDrawerNotif = () => {
    dispatch(openModal({ id: 'drawer-notification' }))
  }

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     dispatch(
  //       addNotification({
  //         id: Math.random(2),
  //         content: data.reply,
  //         isNotificationRead: false,
  //         isArchived: false
  //       })
  //     );
  //   });
  // }, []);
  return (
    <div className="notification-module">
      <span className="notif-cover" onClick={handleOpenDrawerNotif}>
        <div className="count_cover">
          {/* <img className="notif-icon" src={notifIcon} alt="" /> */}
          <NotificationIcon color="#0088F7" className="notif-icon" />
          {notifications.filter((el) => el.isNotificationRead === false).length > 0 && (
            <span className="notif-count">
              {notifications.filter((el) => el.isNotificationRead === false).length}
            </span>
          )}
        </div>
      </span>
    </div>
  )
}

export default NotificationCounter
