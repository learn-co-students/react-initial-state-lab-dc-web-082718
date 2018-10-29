import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  counter() {
    return(this.state.secondsLeft === 0) ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
  }

  render() {
    return(
      <div>{this.counter()}</div>
    )
  }

}
