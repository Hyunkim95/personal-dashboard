import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherCondition: null,
      temp: null,
    };
  };

  componentWillMount() {
    this.getWeather();
  };

  getWeather() {
    console.log('componentWillMount()');
    const URL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const APIKEY = '';
    const LOCATION_KEY = '22889';
    const QUERY = URL + LOCATION_KEY + '?apikey=' + APIKEY;

    axios({
      method: 'get',
      url: QUERY,
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => {
        console.log(response)
        this.setState({
          weatherCondition: response.data[0].WeatherText,
          temp: response.data[0].Temperature.Metric.Value
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <p>{this.state.weatherCondition === [] ? 'Loading...' : this.state.weatherCondition} </p>
        <p>{this.state.temp === [] ? 'Loading...' : this.state.temp} Celcius </p>
      </div>
    );
  };



};




export default Weather;
