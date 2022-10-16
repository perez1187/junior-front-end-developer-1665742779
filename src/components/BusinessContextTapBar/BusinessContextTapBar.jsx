import React from 'react'

//icons
import elipseIcon from '../../assets/icons/Ellipse 47.png'

// css
import './BusinessContextTapBar.css'

function BusinessContextTapBar() {
  return (
    <div className='BusinessContextTapBar'>
        <div className='BusinessContextTapBarFrame'>
            <div className='BusinessContextTapBarMenu'> 
                <img src={elipseIcon} alt="elipse icon"></img>
                <p className='BusinessContextTapBarTitle'>business context</p>
            </div>
        </div>
    </div>
  )
}

export default BusinessContextTapBar