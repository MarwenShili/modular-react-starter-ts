import React from 'react'
import { Avatar, Divider, Drawer } from 'antd'
import { useAppDispatch, useAppSelector } from '../../store'
import { CloseOutlined, UserOutlined } from '@ant-design/icons'
import ProfileIcon from '../../assets/images/characters/profile.webp'
import SidebarItems from '../SidebarItems/SidebarItems'
import Button from '../Button/Button'
import { logout } from '@src/modules/auth/data/authThunk'
import { useNavigate } from 'react-router-dom'
import { PATH } from '@src/modules/auth/routes/paths'

type DrawerExampleProps = {
  id: string
  open: boolean
  handleClose: (id: string) => void
  data: any // Adjust the type as per your requirement
}

const UserProfile: React.FC<DrawerExampleProps> = ({ id, open, handleClose }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { mode } = useAppSelector((state) => state.theme)
  const { presetsConfig } = useAppSelector((state) => state.theme)

  const handleCancel = () => {
    handleClose(id)
  }
  const handleLogout = () => {
    dispatch(logout())
    navigate(PATH.LOGIN)
    handleClose(id)
  }
  const handleBackColor = (preset: string) => ({
    backgroundColor: `${preset}26`,
  })

  return (
    <>
      <Drawer
        className={`profile-drawer ${mode === 'dark' ? 'dark-drawer' : ''}`}
        mask={false}
        title={null}
        open={open}
        onClose={handleCancel}
        width={330}
      >
        <div className="profile-drawer-container">
          <div className="drawer-content">
            <div className="drawer-close" onClick={handleCancel}>
              <CloseOutlined />
            </div>
            <div className="profile-section">
              <div className="profile-avatar" style={handleBackColor(presetsConfig.selectedPreset)}>
                <Avatar
                  src={ProfileIcon}
                  style={handleBackColor(presetsConfig.selectedPreset)}
                  icon={<UserOutlined className="navbar-avatar-icon" />}
                  className="navbar-avatar"
                />
              </div>
              <div className="user-data">
                <div className="profile-name">Marwen Shili</div>
                <div className="profile-email">codingwithshili@gmail.com</div>
              </div>
              <Divider dashed />

              <div className="navigation-section">
                <SidebarItems />
              </div>
            </div>
          </div>
          <Divider dashed />

          <div className="logout-section">
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default UserProfile
