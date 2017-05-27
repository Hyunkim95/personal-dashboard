import React, { Component } from 'react';
import Timer from '../Timer/Timer'
import './App.css';
import Weather from '../Weather/Weather'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
          <h2>Welcome to React</h2>
          <Timer />
          <Weather />
      </div>
    );
  }
}

export default App;
