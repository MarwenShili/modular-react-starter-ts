import { Drawer } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Tooltip } from 'antd'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import { readAllNotifications } from './data/notificationSlice'
import DrawerViewTitle from './components/DrawerViewTitle/DrawerViewTitle'
import NotificationCard from './components/NotificationCard/NotificationCard'

interface NotificationData {
  isArchived: boolean
  isNotificationRead: boolean
  // Add other notification properties as needed
}

interface NotificationsDrawerProps {
  id: string
  open: boolean
  handleClose: (id: string) => void
  data?: any // Type this based on your data structure
}

const NotificationsDrawer: React.FC<NotificationsDrawerProps> = ({ id, open, handleClose }) => {
  const dispatch = useDispatch()

  const { notifications } = useSelector((state: any) => state.notification)
  const notificationTabs = {
    activeTab: '0',
    type: 'details',
    tabs: [
      {
        key: '0',
        label: `All`,
      },
      {
        key: '1',
        label: `Unread`,
      },
      {
        key: '2',
        label: `Archived`,
      },
    ],
  }
  const handleNotificationsByTypes = (
    notifications: NotificationData[],
    activeTab: string,
  ): NotificationData[] => {
    if (activeTab === '0') {
      return notifications.filter((el) => el.isArchived === false)
    }
    if (activeTab === '1') {
      return notifications.filter((el) => el.isNotificationRead === false)
    }
    if (activeTab === '2') {
      return notifications.filter((el) => el.isArchived === true)
    }
    return []
  }

  const handleReadAll = (): void => {
    dispatch(readAllNotifications())
  }

  return (
    <Drawer
      className="drawer-notifications"
      closable={false}
      maskClosable={true}
      title={false}
      placement="right"
      open={open}
      width="450px"
      onClose={() => handleClose(id)}
      footer={<button className="read_all">View All</button>}
      // colorBgMask="red"
    >
      <div className="n_header">
        <h6 className="n_title">Notifications</h6>
        <Tooltip
          overlayStyle={{
            fontSize: '13px',
          }}
          title="Mark all as read"
        >
          <span className="mark_all_read" onClick={handleReadAll}>
            {/* <img src={doneIcon} alt="" /> */}
            <IoCheckmarkDoneSharp color="#0088F7" size={25} />
          </span>
        </Tooltip>
      </div>
      <DrawerViewTitle />
      <div className="content_drawer">
        {handleNotificationsByTypes(notifications, notificationTabs?.activeTab)?.map(
          (notif, index) => <NotificationCard key={index} notification={notif} />,
        )}
      </div>
    </Drawer>
  )
}

export default NotificationsDrawer
