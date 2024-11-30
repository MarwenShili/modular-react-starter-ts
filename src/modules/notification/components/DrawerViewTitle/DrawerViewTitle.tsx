import Tabs from '../Tabs/Tabs'

function DrawerViewTitle() {
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

  return (
    <div className="view-title-notif">
      <Tabs tabs={notificationTabs.tabs} defaultTab={notificationTabs.activeTab} />
    </div>
  )
}

export default DrawerViewTitle
