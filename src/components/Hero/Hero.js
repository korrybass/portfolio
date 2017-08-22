import React from 'react'
import './hero.scss'
import Body from '../Body/Body'

const Hero = () => (
  <div className='hero flex-row between'>
    <div className='hero-content'>
      <div className='intro'>
        <div className='intro-content'>
          <Body />
          <h1>Penhead</h1>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
