import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class BoilersTypesItem extends Component {
  state ={
    isEditing: false,  
  }
  toogleEditing =() =>{
    this.setState({
      isEditing: !this.state.isEditing
    })
  }
  saveChanges=() =>{
    this.toogleEditing();
    //this.props.updateBoilerType(this.state);
  }
  onChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
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
    if(this.state.isEditing){
      return(
        <ul style={this.ulStyle()}>
          <li style={this.liStyle()}>
            {this.props.boilerType.id}
          </li>
          <li style={this.liStyle()}>
            <input 
              style={inputStyle} 
              type='text' 
              name='description' 
              defaultValue={this.props.boilerType.description} 
              onChange={this.onChange}
            />
          </li>
          <li style={this.liStyle()}>
            <input 
              style={inputStyle} 
              type='number' 
              name='stock' 
              defaultValue={this.props.boilerType.stock} 
              onChange={this.onChange} 
            />
          </li>
          <div style={this.liStyle()}>
            <button style={btnStyle} onClick={this.toogleEditing}>Cancel</button>
            <button style={btnStyle} onClick={this.saveChanges}>Save</button>
          </div>
        </ul>
      )
    }
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
          <button style={btnStyle} onClick={this.toogleEditing}>
            Edit
          </button>
          <button style={btnStyle} onClick={this.props.delBoilerType.bind(this, this.props.boilerType.id)}>
            Delete
          </button>
        </div>
      </ul>
    )
  }
}
BoilersTypesItem.propTypes = {
  boilerType: PropTypes.object.isRequired,
  delBoilerType: PropTypes.func.isRequired,
} 
const inputStyle={
  padding:'5px',
  margin: '5px',
}
const btnStyle={
  backgroundColor:'#7364af',
  color: 'white',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '10%',
  cursor:'pointer',
  marginLeft: '5px'
}
export default BoilersTypesItem; 
