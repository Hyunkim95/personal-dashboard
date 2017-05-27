import React, { Component } from 'react';
import Timer from '../Timer/Timer'
import './App.css';

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
      </div>
    );
  }
}

export default App;
