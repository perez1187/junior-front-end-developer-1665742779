import React from 'react'

// css
import './NavbarComponent.css'

// manual avatar image
import userAvatar from '../../assets/MockedData/UserAvatar.png'

function NavbarComponentAvatar() {

    // img from figma url
    // const avatar = 'https://s3-alpha-sig.figma.com/img/11da/73c4/640f384abd00e598eaa0d29622a626c2?Expires=1666569600&Signature=fkpa8dsBKW1x2b1qoejaLe4uIoveGfy6jIl3-fDYV-E1qEAwMSaQo5BorLtAwjLH2-fIRoOQ2IKIi7ts9qStd2vwzIoz6qf~c5Sm1R7P9oWfADi9WkztSMAOLOvGcaPX-NRGqkIxNKaVWNf1pr0cf4x72ncS3KXojgF3jQkU~R2tCA0OXaj7cTeKDggwlYl-cOkeGtzi8I1fOOqtyjI0hEV5~6jrqlVOc6eyhouWfTQHuCEyi5pyOhVTaoAj9RdwdC3kqecJOtd4Ntl72svYLK2lst7slqBq2tz6gKUEWCOSB4uvXZDhStFIzUejgjhv2A4DfNh4piFXuyDf~iA-6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'

  return (
    <div className='UserImageNavbar'>
        <div className='AvatarNavbar' style={{backgroundImage: `url(${userAvatar})`}}></div>
    </div>
  )
}

export default NavbarComponentAvatar