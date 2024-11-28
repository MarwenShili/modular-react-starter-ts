import { useEffect, useRef, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../store'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const { i18n } = useTranslation()
  const { autoWidth } = useAppSelector((state) => state.theme)

  const [showSidebar, setShowSidebar] = useState(false)
  useEffect(() => {
    const handler = (e: MouseEvent | React.MouseEvent) => {
      if (!menuRef?.current?.contains(e?.target as Node)) {
        setShowSidebar(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <div className="main-layout">
      <div
        className={` ${
          i18n.language.toString() === 'en' ? 'main-layout-sidebar' : 'main-layout-sidebar-ar'
        } ${showSidebar ? 'main-layout-toggle-mobile-sidebar' : ''}`}
      >
        <Sidebar />
      </div>

      {showSidebar ? <span className="main-layout-shadow"></span> : null}

      <div className={`main-layout-content ${showSidebar ? 'main-layout-disable-events' : ''}`}>
        <div className="main-layout-navbar">
          <Navbar setShowSidebar={setShowSidebar} />
        </div>
        <div className={`main-layout-outlet ${autoWidth ? 'auto-width' : ''}`}>{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
