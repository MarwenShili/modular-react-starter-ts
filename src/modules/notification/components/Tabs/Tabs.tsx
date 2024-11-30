import { Tabs } from 'antd'
import { useAppSelector } from '@src/modules/shared/store'

const { TabPane } = Tabs

interface Tab {
  key: string
  label: string
}

interface CustomTabsProps {
  tabs: Tab[]
  defaultTab: string
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs, defaultTab }) => {
  const { notifications } = useAppSelector((state) => state.notification)

  const handleNotificationsLength = (notifications: any[], activeTab: string): number => {
    if (activeTab === '0') {
      return notifications.filter((el) => el.isArchived === false).length
    }
    if (activeTab === '1') {
      return notifications.filter((el) => el.isNotificationRead === false).length
    }
    if (activeTab === '2') {
      return notifications.filter((el) => el.isArchived === true).length
    }
    return 0
  }

  return (
    <div className="view_tabs_notif">
      <Tabs tabBarGutter={25} defaultActiveKey={defaultTab}>
        {tabs.map((tab, index) => (
          <TabPane
            key={index}
            tab={
              <span className="tab_notif_item">
                {tab.label}
                <div
                  className={
                    tab.key === '0'
                      ? 'length_tab all_notif'
                      : tab.key === '1'
                      ? 'length_tab unread_notif'
                      : 'length_tab archived_notif'
                  }
                >
                  {handleNotificationsLength(notifications, tab.key)}
                </div>
              </span>
            }
          />
        ))}
      </Tabs>
    </div>
  )
}

export default CustomTabs
