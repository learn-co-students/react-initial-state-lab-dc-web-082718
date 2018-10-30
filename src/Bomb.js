// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render(){
    let text = '';
    if (this.state.secondsLeft == 0)
    {
      text = 'Boom!'
    }
    else
    {
      text= `${this.state.secondsLeft} seconds left before I go boom!`
    }

    return (
      <div>{text}</div>
    )
  }
}
