import React, { Component } from 'react';

class BoilersTypes extends Component {
  render() {
    return this.props.boilersTypes.map((boilerType) =>(
        <h3>{boilerType.description}</h3>
    ))
  }
}

export default BoilersTypes;

