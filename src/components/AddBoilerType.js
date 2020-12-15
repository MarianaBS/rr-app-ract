import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddBoilerType extends Component {
    state = {
        description:'',
        stock:'',
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addBoilerType(this.state);
        this.setState(
            {
                description:'', 
                stock:''
            })
    };
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={formStyle}>
                <label style={inputStyle}> Description: </label>
                <input
                    type = 'text'
                    name = 'description'
                    style = {inputStyle}
                    value = {this.state.description}
                    onChange = {this.onChange}
                />
                <label style = {inputStyle}> Stock: </label>
                <input
                    type = 'number'
                    name = 'stock'
                    style = {inputStyle}
                    value = {this.state.stock}
                    onChange = {this.onChange}
                />
                <input
                    type='submit'
                    value='Add New'
                    style={btnStyle}
                />
            </form>
        )
    }
}
AddBoilerType.propTypes = {
    addBoilerType: PropTypes.func.isRequired,
  } 
const formStyle={
    //display: 'flex',
    margin: '10px',
}
const inputStyle={
    //display: 'flex 10',
    padding:'5px',
    margin: '5px',
}
const btnStyle={
    backgroundColor:'#7364af',
    color: 'white',
    border: 'none',
    padding: '3px 9px',
    borderRadius: '10%',
    cursor:'pointer',
    marginLeft: '10px',
    //display: 'flex 1',
  }

export default AddBoilerType;
