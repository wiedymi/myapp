import React, { Component } from 'react';
import './Form.css';
import Button from './../Button/Button';

class Form extends Component {
  state = {
    name: null,
    text: null,
    img: null
  }
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if(value.length < 3){
      e.target.classList.add("danger");
      return false;
    }
    e.target.classList.remove("danger");
    this.setState({
      [name]: value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handle(this.state);
  }
  render(){
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input type="text" name="name" id="name" onChange={this.handleChange}></input>
        <label htmlFor="text">Description</label>
        <input type="text" name="text" id="text" onChange={this.handleChange}></input>
        <label htmlFor="img">Avatar</label>
        <input type="text" name="img" id="img" onChange={this.handleChange}></input>
        <Button name="Add User" handle={this.handleSubmit} />
      </form>
    );
  }
}

export default Form;
