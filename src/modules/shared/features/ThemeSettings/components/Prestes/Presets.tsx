import { RootState } from '@src/modules/shared/store'
import { useAppSelector, useAppDispatch } from '@src/modules/shared/store'
import { PresetIcon } from './PresetIcon'
import { setPresets } from '@src/modules/shared/store/slices/theme/themeSlice'

function Presets() {
  const dispatch = useAppDispatch()
  const { presetsConfig } = useAppSelector((state: RootState) => state.theme)

  const handleBackColor = (preset: string) => ({
    backgroundColor: `${preset}26`,
  })

  const handlePresetClick = (preset: string) => {
    dispatch(setPresets(preset))
  }

  return (
    <div className="nav-settings presets">
      <p className="title">Presets</p>

      <div className="content">
        {presetsConfig.presets.map((preset, index) => (
          <div
            className={`preset-item ${preset === presetsConfig.selectedPreset ? 'selected' : ''}`}
            key={index}
            style={handleBackColor(preset)}
            onClick={() => handlePresetClick(preset)}
          >
            <PresetIcon color={preset} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Presets
