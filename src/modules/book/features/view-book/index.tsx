import Button from '@src/modules/shared/components/Button/Button'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@src/modules/shared/store'

const BookPage = () => {
  const testState = useSelector((state: RootState) => state.book)
  console.log(testState)

  return (
    <div>
      <Button>
        <Link to="/edit-book" style={{ color: '#ffff' }}>
          Go to Edit book view
        </Link>
      </Button>
    </div>
  )
}

export default BookPage
