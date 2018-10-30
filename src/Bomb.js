// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {

  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  whatToRender = () => {
    if (this.state.secondsLeft === 0) {
      return `Boom!`
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

render() {
  return this.whatToRender()
  }

}

//
// whatToRender = () => {
//   if (this.state.currentSlideIndex === 0) {
//     return `Boom!`
//   } else {
//     return `I am on slide ${this.state.currentSlideIndex}`
//   }
// }
//
// render() {
//   return this.whatToRender()
