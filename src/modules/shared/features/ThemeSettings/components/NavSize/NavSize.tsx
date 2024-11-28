import IcIntegrate from '../../../../assets/icons/settings/ic-sidebar-outline.svg'
import IcApparent from '../../../../assets/icons/settings/ic-sidebar-filled.svg'
import { RootState, useAppSelector, useAppDispatch } from '@src/modules/shared/store'
import { setCollapseSidebar } from '@src/modules/shared/store/slices/theme/themeSlice'

function NavSize() {
  const { collapseSidebar, presetsConfig } = useAppSelector((state: RootState) => state.theme)
  const dispatch = useAppDispatch()

  // Helper function to convert hex to rgba with opacity
  const getDowngradedColor = (hex: string) => {
    const cleanHex = hex.replace('#', '')
    const r = parseInt(cleanHex.substring(0, 2), 16)
    const g = parseInt(cleanHex.substring(2, 4), 16)
    const b = parseInt(cleanHex.substring(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, 0.1)`
  }

  // Helper functions to get colors based on selection state
  const getBoxColor = (isSelected: boolean) =>
    isSelected ? presetsConfig.selectedPreset : undefined

  const getDowngradedPresetColor = (isSelected: boolean) =>
    isSelected ? getDowngradedColor(presetsConfig.selectedPreset) : undefined

  const handleSidebarToggle = (collapsed: boolean) => {
    dispatch(setCollapseSidebar(collapsed))
  }

  return (
    <div className="nav-settings">
      <p className="title">Nav</p>
      <div className="content">
        <p className="layout">Layout</p>
        <div className="layout-items">
          <div
            className={`layout-item-collapsed ${!collapseSidebar ? 'selected' : ''}`}
            onClick={() => handleSidebarToggle(false)}
          >
            <div className="left">
              <span
                className="box-color"
                style={{ backgroundColor: getBoxColor(!collapseSidebar) }}
              ></span>
              <div
                className="line l-1"
                style={{ backgroundColor: getDowngradedPresetColor(!collapseSidebar) }}
              ></div>
              <div
                className="line l-2"
                style={{ backgroundColor: getDowngradedPresetColor(!collapseSidebar) }}
              ></div>
            </div>
            <div
              className="right"
              style={{ backgroundColor: getDowngradedPresetColor(!collapseSidebar) }}
            >
              <div
                className="colored-content"
                style={{ backgroundColor: getDowngradedPresetColor(!collapseSidebar) }}
              ></div>
            </div>
          </div>
          <div
            className={`layout-item-collapsed ${collapseSidebar ? 'selected' : ''}`}
            onClick={() => handleSidebarToggle(true)}
          >
            <div className="left">
              <span
                className="box-color"
                style={{ backgroundColor: getBoxColor(collapseSidebar) }}
              ></span>
              <div
                className="line"
                style={{ backgroundColor: getDowngradedPresetColor(collapseSidebar) }}
              ></div>
              <div
                className="line"
                style={{ backgroundColor: getDowngradedPresetColor(collapseSidebar) }}
              ></div>
            </div>
            <div
              className="right"
              style={{ backgroundColor: getDowngradedPresetColor(collapseSidebar) }}
            >
              <div
                className="colored-content"
                style={{ backgroundColor: getDowngradedPresetColor(collapseSidebar) }}
              ></div>
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
  )
}

export default NavSize
