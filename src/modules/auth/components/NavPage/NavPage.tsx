import { useAppSelector } from '@src/modules/shared/store'
import { useAppDispatch } from '@src/modules/shared/store'
import { openModal } from '@src/modules/shared/store/slices/modal/modalSlice'
import bg from '../../assets/images/auth-bg.svg'
import settingsIcon from '../../../shared/assets/icons/navbar/settings.svg'

function NavPage() {
  const { presetsConfig } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const handleClickSettings = () => {
    dispatch(openModal({ id: 'theme-settings' }))
  }
  return (
    <div className="container-image" style={{ background: presetsConfig.selectedPreset }}>
      <img src={bg} className="bg-image" alt="img" />
      <div className="setting-icon" onClick={handleClickSettings}>
        <img src={settingsIcon} alt="settings" />
      </div>
    </div>
  )
}

export default NavPage
