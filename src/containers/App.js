import React, { Component } from 'react'
import Hero from '../components/Hero/Hero'
import Header from '../components/Header/Header'

class App extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div className='site-container'>
        <Header />
        <Hero />
      </div>
    )
  }
}

export default App
