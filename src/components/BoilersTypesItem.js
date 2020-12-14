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
        <div style={this.liStyle()}>
          <button style={btnStyle}> EDIT</button>
          <button style={btnStyle} onClick>X</button>
        </div>
      </ul>
    )
  }
}
BoilersTypesItem.propTypes = {
  boilerType: PropTypes.object.isRequired
} 
const btnStyle={
  backgroundColor:'#7364af',
  color: 'white',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor:'pointer',
}
export default BoilersTypesItem
