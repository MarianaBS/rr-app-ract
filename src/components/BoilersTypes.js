import React, { Component } from 'react';
import BoilersTypesItem from './BoilersTypesItem';
import PropTypes from 'prop-types';

class BoilersTypes extends Component {
  render() {
    return this.props.boilersTypes.map((boilerType) =>(
        <BoilersTypesItem key={boilerType.id} boilerType={boilerType} delBoilerType={this.props.delBoilerType}/>
    ))
  }
}
BoilersTypes.propTypes = {
    boilersTypes: PropTypes.array.isRequired,
    delBoilerType: PropTypes.func.isRequired,
}
export default BoilersTypes;

