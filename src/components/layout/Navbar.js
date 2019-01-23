import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import mario from '../../mario.png'



const Navbar = () => {
  return (
    <nav className='nav-wrapper grey darken-3'>
        <div className='container'>
            <Link to='/' className='brand-logo mario material-icons'><img src={mario} alt={'mario'} /></Link>
            <SignedInLinks />
            <SignedOutLinks />
        </div>
    </nav>
  )
}

export default Navbar;
