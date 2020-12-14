import React, { Component } from 'react';
import './App.css';
import BoilersTypes from './components/BoilersTypes';
import boilersTypes from './mocks/boilersTypes.json'

class App extends Component {
  state = {
    boilersTypes
  };

  render() {
    //console.log(this.state.boilersTypes);
    return (
      <div className="App">
        <h1>Boilers Types</h1>
        <BoilersTypes boilersTypes={this.state.boilersTypes}/>
      </div>
    );
  }
}

export default App;
