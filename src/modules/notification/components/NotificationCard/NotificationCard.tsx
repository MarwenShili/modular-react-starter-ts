import notifIcon from '../../assets/icons/ic_order.svg'
import { useDispatch } from 'react-redux'
import { readNotification } from '@src/modules/notification/data/notificationSlice'

function NormalNotification({ notification }: { notification: any }) {
  const dispatch = useDispatch()

  const handleReadNotification = (id: number) => {
    dispatch(readNotification(id))
  }
  return (
    <div
      className={notification.isNotificationRead === false ? 'normal_notif unread' : 'normal_notif'}
      onClick={() => handleReadNotification(notification.id)}
    >
      <div className="notif_left">
        <img src={notifIcon} alt="" />
        <div className="content_normal_notif">
          <p className="text_notif">{notification.content}</p>
          <p className="date">6 days ago</p>
        </div>
      </div>
      {notification.isNotificationRead === false && <span className="read_unread"></span>}
    </div>
  )
}

export default NormalNotification
