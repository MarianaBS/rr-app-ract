import React, { Component } from 'react';
import Header from './components/layout/Header';
import BoilersTypes from './components/BoilersTypes';
import boilersTypes from './mocks/boilersTypes.json';
import AddBoilerType from './components/AddBoilerType';
import {v4 as uuid} from 'uuid';
import './App.css';

class App extends Component {
  state = {
    boilersTypes
  };
  addBoilerType = ({description, stock}) =>{
    const newBoilerType ={
      id: uuid(),
      description,
      stock,
    }
    this.setState({boilersTypes: [...this.state.boilersTypes, newBoilerType]});
  }
  delBoilerType = (id) =>{
    this.setState({boilersTypes: [...this.state.boilersTypes.filter(boilerType => {
      return boilerType.id !== id;
    })]})
  }
  render() {
    return (
      <div className="App">
        <Header />
        <AddBoilerType addBoilerType={this.addBoilerType} />
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
