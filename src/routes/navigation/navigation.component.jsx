import './navigation.styles.scss'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react' // think ng-container

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrownLogo className='logo'></CrownLogo>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>Shop</Link>
          <Link className='sign-in-link' to='/sign-in'>Sign In</Link>
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  )
}

export default Navigation