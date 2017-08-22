import React, { PropTypes } from 'react'
import './body.scss'

const Body = ({ image }) => (
  <div className='body flex-row between'>
    <div className='envelope open'>
      <div className='flap front' />
      <div className='flap top' />
      <div className='letter flex-row'>
        <div className='flex-row letter-inner-wrapper'>
          <img alt='' className='ph' src={image} />
          <p>
            <span className='bold'>Penhead \ˈpen-hed\</span>
            - an organism that turns chai lattes into software.
          </p>
        </div>
      </div>
    </div>
  </div>
)

Body.propTypes = {
  image: PropTypes.string.isRequired
}

export default Body
