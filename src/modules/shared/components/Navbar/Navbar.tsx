import menuIcon from '../../assets/icons/navbar/menu.svg'
import { useLocation } from 'react-router-dom'
import ThemeButton from '../ThemeButton/ThemeButton'
import { Avatar, Button, Dropdown, MenuProps, Space } from 'antd'
import enFlagIcon from '../../assets/icons/navbar/en-flag.png'
import frFlagIcon from '../../assets/icons/navbar/fr-flag.png'
import arFlagIcon from '../../assets/icons/navbar/ar-flag.png'
import { RootState, useAppDispatch, useAppSelector } from '../../store'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { setCollapseSidebar } from '../../store/slices/theme/themeSlice'
import settingsIcon from '../../assets/icons/navbar/settings.svg'
import { openModal } from '../../store/slices/modal/modalSlice'
import { UserOutlined } from '@ant-design/icons'
interface INavbarProps {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<INavbarProps> = ({ setShowSidebar }) => {
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  const { t, i18n } = useTranslation('translation')

  const { collapseSidebar, presetsConfig } = useAppSelector((state: RootState) => state.theme)

  const [lang, setLang] = useState(i18n?.language?.toString())

  const onChangeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    setLang(language)
  }

  const languagesItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className="navbar-flag-container" onClick={() => onChangeLanguage('en')}>
          <img src={enFlagIcon} alt="flag" className="navbar-flag" />
          <p>{t('language.en')}</p>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className="navbar-flag-container" onClick={() => onChangeLanguage('fr')}>
          <img src={frFlagIcon} alt="flag" className="navbar-flag" />
          <p>{t('language.fr')}</p>
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div className="navbar-flag-container" onClick={() => onChangeLanguage('ar')}>
          <img src={arFlagIcon} alt="flag" className="navbar-flag" />
          <p>{t('language.ar')}</p>
        </div>
      ),
    },
  ]

  const handleClickSettings = () => {
    dispatch(dispatch(openModal({ id: 'theme-settings' })))
  }
  const handleClickUserProfile = () => {
    dispatch(openModal({ id: 'user-profile' }))
  }

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          src={menuIcon}
          alt="menu"
          className="navbar-left-menu-icon"
          onClick={() => {
            dispatch(setCollapseSidebar(false))
            setShowSidebar(true)
          }}
        />
        <img
          src={menuIcon}
          alt="menu"
          className="navbar-left-menu-icon-collapse"
          onClick={() => dispatch(setCollapseSidebar(!collapseSidebar))}
        />
        <p className="navbar-left-title">{pathname.split('/')[1]}</p>
      </div>
      <div className="navbar-right">
        <Space size={'middle'}>
          <Dropdown
            menu={{ items: languagesItems }}
            trigger={['click']}
            placement="bottomRight"
            arrow
          >
            <Button type="link" shape="circle">
              <div className="navbar-flag-container">
                <img
                  src={lang === 'en' ? enFlagIcon : lang === 'fr' ? frFlagIcon : arFlagIcon}
                  alt="flag"
                  className="navbar-flag"
                />
              </div>
            </Button>
          </Dropdown>

          <div className="setting-icon" onClick={handleClickSettings}>
            <img src={settingsIcon} alt="settings" />
          </div>

          <div className="navbar-profile-cursor" onClick={handleClickUserProfile}>
            <Avatar
              style={{ backgroundColor: presetsConfig.selectedPreset }}
              icon={<UserOutlined />}
              size={28}
              className="navbar-avatar"
            ></Avatar>
          </div>
        </Space>

        <ThemeButton />
      </div>
    </div>
  )
}

export default Navbar
