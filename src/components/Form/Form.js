import React, { Component } from 'react';
import './Form.css';
import Button from './../Button/Button';

class Form extends Component {
  state = {
    name: '',
    text: '',
    img: ''
  }
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    });

    if(value.length < 3){
      e.target.classList.add("danger");
      return false;
    }
    e.target.classList.remove("danger");
  }
  handleSubmit = (e) => {
    e.preventDefault();

    if(this.props.handle(this.state)){
      let data = {
        name: '',
        text: '',
        img: ''
      }
      this.setState(data);
    } 
  }
  render(){
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name} placeholder="Write your nickname..."></input>
        <label htmlFor="text">Description</label>
        <input type="text" name="text" id="text" onChange={this.handleChange} value={this.state.text} placeholder="Write something about you..."></input>
        <label htmlFor="img">Avatar</label>
        <input type="text" name="img" id="img" onChange={this.handleChange} value={this.state.img} placeholder="A direct link to your avatar..."></input>
        <Button name="Add User" handle={this.handleSubmit} />
      </form>
    );
  }
}

export default Form;
