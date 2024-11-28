import { Link, useLocation } from 'react-router-dom'
import { SIDEBARITEMS } from '../Sidebar/items'
import { useTranslation } from 'react-i18next'
import { RootState, useAppSelector } from '@src/modules/shared/store'
import { adjustColor } from '@src/modules/shared/utils/adjustColor'

const SidebarItems = () => {
  const { pathname } = useLocation()
  const { t } = useTranslation('sidebar')
  const selectedPreset = useAppSelector(
    (state: RootState) => state.theme.presetsConfig.selectedPreset,
  )
  const collapseSidebar = useAppSelector((state: RootState) => state.theme.collapseSidebar)

  return (
    <div className="sidebar-items">
      {SIDEBARITEMS?.map((route, index) => {
        const isActive = pathname === route?.link
        const iconStyle = isActive ? { stroke: selectedPreset } : undefined
        const backgroundStyle = isActive
          ? { backgroundColor: adjustColor(selectedPreset, 0.1), color: selectedPreset }
          : undefined

        return (
          <Link
            to={route?.link}
            key={index}
            className={`${collapseSidebar ? 'item collapsed-item' : 'item'} ${
              isActive && 'active'
            }`}
            style={backgroundStyle}
          >
            <div
              className={`link-icon-stroke-color ${isActive && 'link-icon-stroke-color-active'}`}
              style={iconStyle}
            >
              {route?.icon}
            </div>
            {t(`sidebar.${route?.label.toLowerCase()}`) || null}
          </Link>
        )
      })}
    </div>
  )
}

export default SidebarItems
