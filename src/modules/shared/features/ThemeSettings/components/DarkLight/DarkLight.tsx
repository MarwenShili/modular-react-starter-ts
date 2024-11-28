import { Switch } from 'antd'
import IcMoon from '../../../../assets/icons/settings/ic-moon.svg'
import IcContrast from '../../../../assets/icons/settings/ic-autofit-width.svg'

function DarkLight() {
  return (
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
  )
}

export default DarkLight
