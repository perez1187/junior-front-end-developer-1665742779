import React from 'react'

// css
import './NavbarComponent.css'

// logo
import logo from './../../assets/Logo/logoCzarne.png'

// manual avatar image
import userAvatar from '../../assets/MockedData/UserAvatar.png'


function NavbarComponent() {

  return (
    <div className='Menu'>

      <div> 
        <img src={logo} alt="Logo" className='LogoNavbar'/>
      </div>
      <div className='UserImageNavbar'>
        <div className='AvatarNavbar' style={{backgroundImage: `url(${userAvatar})`}}></div>
      </div>
      
    </div>
  )
}

export default NavbarComponent