import { Switch } from 'antd'
import { useAppDispatch, useAppSelector } from '@src/modules/shared/store'
import { setAutoWidth, toggleTheme } from '@src/modules/shared/store/slices/theme/themeSlice'
import { MoonIcon } from '../../assets/icons/MoonIcon'
import { AutoWidthIcon } from '../../assets/icons/AutoWidthIcon'

function DarkLight() {
  const { mode, presetsConfig, autoWidth } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()
  return (
    <div className="themes">
      <div
        className="theme"
        onClick={() => dispatch(toggleTheme())}
        style={{ backgroundColor: mode === 'dark' ? '#F5F7F9' : '#ffffff' }}
      >
        <div className="theme-header">
          <div className="theme-icon">
            <MoonIcon color={mode === 'dark' ? '#ffffff' : presetsConfig.selectedPreset} />
          </div>
          <Switch checked={mode === 'dark'} size="small" className="switch" />
        </div>
        <p className="theme-name">Dark Mode</p>
      </div>
      <div
        className="theme"
        onClick={() => dispatch(setAutoWidth(!autoWidth))}
        style={{ backgroundColor: mode === 'dark' ? '#F5F7F9' : '#ffffff' }}
      >
        <div className="theme-header">
          <div className="theme-icon">
            <AutoWidthIcon color={mode === 'dark' ? '#ffffff' : presetsConfig.selectedPreset} />
          </div>
          <Switch checked={autoWidth} size="small" className="switch" />
        </div>
        <p className="theme-name">Compact</p>
      </div>
    </div>
  )
}

export default DarkLight
