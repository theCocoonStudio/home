import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router'

const WrongWay = () => {
  return (
    <>
      <div className='bg-404'>
        <div>
          <h1 className='title-404 changa-one-regular'>Oops.</h1>
          <h3 className='subtitle-404 raleway'>
            These aren&#39;t the droids you&#39;re looking for.
          </h3>
        </div>
      </div>
      <div className='home-container-404'>
        <div className='home-404'>
          <Link to='/'>
            <HomeIcon
              fontSize='inherit'
              sx={{
                color: 'common.black',
              }}
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default WrongWay
