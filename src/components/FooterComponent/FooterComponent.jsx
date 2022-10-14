import React from 'react'

//css
import './FooterComponent.css'

function FooterComponent() {
  return (
    <div className='Footer'>
        <div className='FooterComponentLeft'> 
          <div className='FooterTermsOfService'> Terms of service</div>
          <div className='FooterDot'> . </div>
          <div className='FooterPrivacyPolicy'>Privacy policy</div>
          <div className='FooterDot2'> . </div>
          <div className='FooterCopyright'>Copyright</div>
        </div>
        <div className='FooterComponentRight'>
           <div className='FooterNerdsFamilyVersion'>nerds.family Version 1.2</div>
           <div className='FooterDot3'> . </div>
           <div className='FooterLastUpdate'>Last update 10/09/2022</div>
        </div>
    </div>
  )
}

export default FooterComponent