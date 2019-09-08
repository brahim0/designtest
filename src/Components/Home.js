import React, { Component } from 'react'
import { Transition, animated } from 'react-spring/renderprops'
import MainProfile from './MainProfile';
import OtherMainProfile from './OtherMainProfile';
const pages = [
    style => (
      <animated.div style={{ ...style, background: '#141A46', color: '#EC8B5E' }}><MainProfile /></animated.div>
    ),
    style => (
      <animated.div style={{ ...style, background: '#EC8B5E',color: '#141A46'  }}><OtherMainProfile /></animated.div>
    ),
   
  ]

  export default class Home extends Component {
    state = { index: 0 }
    toggle = e =>
      this.setState(state => ({
        index: state.index === 1 ? 0 : state.index + 1,
      }))
    render() {
      return (
        <>
        
        <div className="main" onClick={this.toggle}>
          <Transition
            native
            reset
            unique
            items={this.state.index}
            from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}>
            {index => pages[index]}
          </Transition>
          
        </div>
        </>
      )
    }
  }