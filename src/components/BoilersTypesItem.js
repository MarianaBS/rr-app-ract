import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class BoilersTypesItem extends Component {
  ulStyle = () =>{
    return{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      listStyle:'none',
      padding: '10px',
      backgroundColor: '#E7E4F3',
      borderBottom: '1px dotted black'
    }
  }
  liStyle = () =>{
    return{
      textAlign: 'center',
      width: '100%',
    }
  }
  render() {
    return (
      <ul style={this.ulStyle()}>
        <li style={this.liStyle()}>
          {this.props.boilerType.id}
        </li>
        <li style={this.liStyle()}>
          {this.props.boilerType.description}
        </li>
        <li style={this.liStyle()}>
          {this.props.boilerType.stock}
        </li>
      </ul>
    )
  }
}
BoilersTypesItem.propTypes = {
  boilerType: PropTypes.object.isRequired
} 
export default BoilersTypesItem
