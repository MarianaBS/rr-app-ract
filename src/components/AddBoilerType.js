import React, { Component } from 'react'

export class AddBoilerType extends Component {
    render() {
        return (
            <form style={formStyle}>
                <label style={inputStyle}>Description: </label>
                <input
                    type='text'
                    name='description'
                    style={inputStyle}
                />
                <label style={inputStyle}>Stock: </label>
                <input
                    type='number'
                    name='stock'
                    style={inputStyle}
                />
                <input
                    type='submit'
                    value='Add'
                    style={btnStyle}
                />
            </form>
        )
    }
}
const formStyle={
    display: 'flex',
    margin: '10px',
}
const inputStyle={
    display: 'flex 10',
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
    marginLeft: '10px',
    display: 'flex 1',
  }

export default AddBoilerType;
