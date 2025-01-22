import { RootState, useAppSelector } from '../../store'
import SidebarItems from '../SidebarItems/SidebarItems'

const Sidebar = () => {
  const { collapseSidebar, navColor } = useAppSelector((state: RootState) => state.theme)
  return (
    <div
      className={`sidebar ${collapseSidebar ? 'collapse' : ''}`}
      style={{ background: navColor }}
    >
      <div className="sidebar-logo-container">{collapseSidebar ? 'L' : 'Logo'}</div>

      <div className="sidebar-content">
        <div className="sidebar-nav-items">
          <SidebarItems />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
