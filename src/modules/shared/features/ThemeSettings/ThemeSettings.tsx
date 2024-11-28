import React from 'react'
import { Drawer } from 'antd'
import DarkLight from './components/DarkLight/DarkLight'
import NavSize from './components/NavSize/NavSize'
import Presets from './components/Prestes/Presets'
import SettingsHeader from './components/SettingHeader/SettingsHeader'

type ThemeSettingsProps = {
  id: string
  open: boolean
  handleClose: (id: string) => void
  data: any
}

const ThemeSettings: React.FC<ThemeSettingsProps> = ({ id, open, handleClose }) => {
  const handleCancel = () => {
    handleClose(id)
  }

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
        <SettingsHeader handleCancel={handleCancel} />
        <DarkLight />
        <NavSize />
        <Presets />
      </Drawer>
    </>
  )
}

export default ThemeSettings
