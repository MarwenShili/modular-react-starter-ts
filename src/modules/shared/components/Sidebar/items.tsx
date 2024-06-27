/* eslint-disable react-refresh/only-export-components */
import { ReactComponent as DashboardIcon } from '../../assets/icons/sidebar/dashboard.svg'
import { ReactComponent as SettingsIcon } from '../../assets/icons/sidebar/settings.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/sidebar/profile.svg'

export const SIDEBARITEMS = [
  {
    link: '/dashboard',
    label: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    link: '/view-book',
    label: 'Books',
    icon: <SettingsIcon />,
  },
  {
    link: '/profile',
    label: 'Profile',
    icon: <ProfileIcon />,
  },
  {
    link: '/trying',
    label: 'Trying',
    icon: <SettingsIcon />,
  },
]
