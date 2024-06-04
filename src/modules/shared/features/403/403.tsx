import { Button } from 'antd'
import Icon404 from './assets/icons/403.svg'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const onGoHome = () => {
    return navigate(-1)
  }
  return (
    <div className="not-permission-page">
      <p className="not-permission-title">Permission Denied</p>
      <p className="subtitle-not-permission">You do not have permission to access this page</p>
      <img src={Icon404} alt="" />
      <Button onClick={onGoHome} className="go-back-btn">
        Go Back
      </Button>
    </div>
  )
}

export default NotFound
