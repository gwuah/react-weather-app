
import React, { Component } from 'react';
import UserInput from './components/UserInput';
import WeatherCard from './components/Weather';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { weather: null, city: 'Accra', loading: true }
    this.getSelectedCity = this.getSelectedCity.bind(this)
  }

  getSelectedCity(city) {
    console.log(city)
    this.setState({ city }, () => this.componentDidMount())
  }

  getWeatherData(city) {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=ddbff8b5110a9ea4891855657d0e1844`)
    .then(({ data }) => {
      console.log('data came back', data)
      const description = data.weather[0].main;
      const temperature = data.main.temp;

      this.setState({ weather: { description, temperature }, loading: false}, () => console.log(this.state))

    })
  }

  componentDidMount() {
    this.getWeatherData(this.state.city)
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo'/>
          <h1 className='App-title'>My Weather App</h1>
          <UserInput selectedCity={this.getSelectedCity}/>

          { 
            this.state.loading 
            ? <h1>Loading weather</h1> 
            : <WeatherCard city={this.state.city} description={this.state.weather.description} temperature={this.state.weather.temperature}/>}
        </header>
      </div>
    )
  }
}

export default App;