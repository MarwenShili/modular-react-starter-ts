import { Button } from 'antd'
import Icon404 from './assets/icons/404.svg'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const onGoHome = () => {
    return navigate('/dashboard')
  }
  return (
    <div className="not-found-page">
      <p className="not-found-title">Sorry, Page Not Found!</p>
      <p className="subtitle-not-found">
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
        sure to check your spelling.
      </p>
      <img src={Icon404} alt="" />
      <Button onClick={onGoHome} className="go-home-btn">
        Go To Home
      </Button>
    </div>
  )
}

export default NotFound
