import React from 'react'

// css
import './NavbarComponent.css'

// components
import NavbarComponentAvatar from './NavbarComponentAvatar'
import NavbarComponentLogo from './NavbarComponentLogo'

function NavbarComponent() {

  return (
    <div className='Menu'>
        <NavbarComponentLogo/>
        <NavbarComponentAvatar/>
    </div>
  )
}

export default NavbarComponent