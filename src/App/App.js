import React, { Component } from 'react';
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
        <Weather />
      </div>
    );
  }
}

export default App;
