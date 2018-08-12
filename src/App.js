
import React, { Component } from 'react';
import UserInput from './components/UserInput';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getSelectedCity(city) {
    console.log(city)
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo'/>
          <h1 className='App-title'>My Weather App</h1>
          <UserInput selectedCity={this.getSelectedCity}/>
        </header>
      </div>
    )
  }
}

export default App;