import { Button, Popover } from 'antd'
import {
  CloseOutlined,
  UndoOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { resetTheme } from '@src/modules/shared/store/slices/theme/themeSlice'
import { useAppDispatch } from '@src/modules/shared/store'

function SettingsHeader({ handleCancel }: { handleCancel: () => void }) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const dispatch = useAppDispatch()

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

  const handleReset = () => {
    dispatch(resetTheme())
  }
  return (
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
          <Button type="text" icon={<UndoOutlined />} onClick={handleReset} />
        </Popover>
        <Button type="text" icon={<CloseOutlined />} onClick={handleCancel} />
      </div>
    </div>
  )
}

export default SettingsHeader
