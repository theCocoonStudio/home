import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router'

export const WrongWay = () => {
  return (
    <div className='bg-404'>
      <h1 className='title-404 changa-one-regular'>Oops.</h1>
      <h2 className='subtitle-404 raleway'>
        These aren&#39;t the droids you&#39;re looking for.
      </h2>
      <Link to='/'>
        <div className='home-404'>
          <HomeIcon />
        </div>
      </Link>
    </div>
  )
}
