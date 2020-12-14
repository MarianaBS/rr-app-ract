import React, { Component } from 'react';
import './App.css';
import BoilersTypes from './components/BoilersTypes';
import boilersTypes from './mocks/boilersTypes.json'

class App extends Component {
  state = {
    boilersTypes
  };
  delBoilerType = (id) =>{
    this.setState({boilersTypes: [...this.state.boilersTypes.filter(boilerType => boilerType.id !== id)]})
  }
  render() {
    return (
      <div className="App">
        <h1>Cald<span id="especial">AR</span></h1>
        <h2>Boilers Types</h2>
        <ul className="list-style">
          <li>ID</li>
          <li>Description</li>
          <li>Stock</li>
          <li>Actions</li>
        </ul>
        <BoilersTypes boilersTypes={this.state.boilersTypes} delBoilerType={this.delBoilerType}/>
      </div>
    );
  }
}

export default App;
