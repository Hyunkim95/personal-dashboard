import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      secondsElapsed: 0,
      playing: false
    };
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  getSeconds(){
    return ('0' + this.state.secondsElapsed % 60).slice(-2)
  }

  getMinutes(){
    return Math.floor(this.state.secondsElapsed/60)
  }

  start() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.setState({
      playing: true
    })
  }

  pause() {
    clearInterval(this.interval);
    this.setState({
      playing: false
    })
  }

  reset() {
    this.setState({
      secondsElapsed: 0
    })
  }

  render() {
    return (
      <div>
        <h2>Meditation Timer</h2>
        <hr />
        <h2>{this.getMinutes()}:{this.getSeconds()}</h2>
        <br />

        {!this.state.playing ? <button onClick={() => this.start()}>Start</button> : <button label="Pause" onClick={() => this.pause()}>Pause</button>}

        <button label="Reset" onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

export default Timer;
