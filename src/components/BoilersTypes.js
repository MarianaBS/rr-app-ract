import React, { Component } from 'react';
import BoilersTypesItem from './BoilersTypesItem';
import PropTypes from 'prop-types';

class BoilersTypes extends Component {
  render() {
    return this.props.boilersTypes.map((boilerType) =>(
        <BoilersTypesItem key={boilerType.id} boilerType={boilerType}/>
    ))
  }
}
BoilersTypes.propTypes = {
    boilersTypes: PropTypes.array.isRequired
}
export default BoilersTypes;

