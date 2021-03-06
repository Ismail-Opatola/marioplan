import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import mario from '../../mario.png'
import { connect } from 'react-redux'



const Navbar = (props) => {

  const { auth, profile } = props;

  // console.log(auth);
  const links = auth.uid ? <SignedInLinks _profile={profile} /> : <SignedOutLinks />;

  return (
    <nav className='nav-wrapper grey darken-3'>
        <div className='container'>
            <Link to='/' className='brand-logo mario circle responsive-img'><img src={mario} alt={'mario'} /></Link>
            
            { links }

            {/* <SignedInLinks />
            <SignedOutLinks /> */}
        </div>
    </nav>
  )
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
      auth: state.__firebase.auth,
      profile: state.__firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);
