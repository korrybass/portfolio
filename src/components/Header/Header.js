import React, { Component } from 'react'
import classnames from 'classnames'
import './header.scss'
// import logo from '../../assets/img/penhead_logo4.png'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      navIsActive: false,
      navToggled: false
    }
  }

  toggleNav = () => {
    this.setState({ navIsActive: !this.state.navIsActive, navToggled: true })
  }

  render () {
    const navClass = classnames('hamburger hamburger--spring', {
      'is-active': this.state.navIsActive
    })
    const navContainerClass = classnames(
      'nav-container animated',
      {
        'is-showing': this.state.navIsActive,
        zoomIn: this.state.navIsActive,
        zoomOut: !this.state.navIsActive && this.state.navToggled
      })

    return (
      <div>
        <div className='header flex-row between'>
          <div className='nav-logo'>
            <button onClick={this.toggleNav} className={navClass} type='button'>
              <span className='hamburger-box'>
                <span className='hamburger-inner' />
              </span>
            </button>
          </div>
          <div className={navContainerClass}>
            <ul>
              <li>Work</li>
              <li>Blog</li>
              <li>Game</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
