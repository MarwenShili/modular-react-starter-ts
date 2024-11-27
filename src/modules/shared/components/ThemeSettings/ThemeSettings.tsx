import React, { useState, useEffect } from 'react'
import { Button, Drawer, Popover, Switch } from 'antd'
import {
  CloseOutlined,
  UndoOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons'
import IcMoon from '../../assets/icons/settings/ic-moon.svg'
import IcContrast from '../../assets/icons/settings/ic-autofit-width.svg'
import IcIntegrate from '../../assets/icons/settings/ic-sidebar-outline.svg'
import IcApparent from '../../assets/icons/settings/ic-sidebar-filled.svg'

type ThemeSettingsProps = {
  id: string
  open: boolean
  handleClose: (id: string) => void
  data: any
}

const ThemeSettings: React.FC<ThemeSettingsProps> = ({ id, open, handleClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleCancel = () => {
    handleClose(id)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  return (
    <>
      <Drawer
        className="setting-drawer"
        mask={false}
        title={null}
        open={open}
        onClose={handleCancel}
        width={330}
      >
        <div className="setting-header">
          <span className="title">Settings</span>
          <div className="actions">
            <Popover content={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}>
              <Button
                type="text"
                icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                onClick={toggleFullscreen}
              />
            </Popover>
            <Popover content="Reset">
              <Button type="text" icon={<UndoOutlined />} />
            </Popover>
            <Button type="text" icon={<CloseOutlined />} onClick={handleCancel} />
          </div>
        </div>
        {/* Mode and spacing */}
        <div className="themes">
          <div className="theme">
            <div className="theme-header">
              <div className="theme-icon">
                <img src={IcMoon} alt="Light" />
              </div>
              <Switch size="small" className="switch" />
            </div>
            <p className="theme-name">Dark Mode</p>
          </div>
          <div className="theme">
            <div className="theme-header">
              <div className="theme-icon">
                <img src={IcContrast} alt="contrast" />
              </div>
              <Switch size="small" className="switch" />
            </div>
            <p className="theme-name">Compact</p>
          </div>
        </div>
        {/* Nav Size and bg */}
        <div className="nav-settings">
          <p className="title">Nav</p>
          <div className="content">
            <p className="layout">Layout</p>
            <div className="layout-items">
              <div className="layout-item-collapsed">
                <div className="left">
                  <span className="box-color"></span>
                  <div className="line l-1"></div>
                  <div className="line l-2"></div>
                </div>
                <div className="right">
                  <div className="colored-content"></div>
                </div>
              </div>
              {/* //// */}
              <div className="layout-item-collapsed">
                <div className="left">
                  <span className="box-color"></span>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <div className="right">
                  <div className="colored-content"></div>
                </div>
              </div>
            </div>
            <p className="layout">Color</p>
            <div className="color-settings">
              <div className="color-item">
                <img src={IcIntegrate} alt="integrate" />
                Integrate
              </div>
              <div className="color-item">
                <img src={IcApparent} alt="apparent" />
                Apparent
              </div>
            </div>
          </div>
        </div>
        {/* Presets */}
        <div className="nav-settings presets">
          <p className="title">Presets</p>
        </div>

        {/* Font */}
        <div className="nav-settings font">
          <p className="title">Font</p>
        </div>
      </Drawer>
    </>
  )
}

export default ThemeSettings
