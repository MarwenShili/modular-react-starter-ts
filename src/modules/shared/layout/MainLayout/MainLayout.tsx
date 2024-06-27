import { useEffect, useRef, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { useTranslation } from 'react-i18next'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const { i18n } = useTranslation()

  const [showSidebar, setShowSidebar] = useState(false)
  const [collapseSidebar, setCollapseSidebar] = useState(true)

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
        <Sidebar collapseSidebar={collapseSidebar} />
      </div>

      {showSidebar ? <span className="main-layout-shadow"></span> : null}

      <div className={`main-layout-content ${showSidebar ? 'main-layout-disable-events' : ''}`}>
        <div className="main-layout-navbar">
          <Navbar
            setShowSidebar={setShowSidebar}
            setCollapseSidebar={setCollapseSidebar}
            collapseSidebar={collapseSidebar}
          />
        </div>
        <div className="main-layout-outlet">{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
