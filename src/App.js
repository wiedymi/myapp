import React, { Component } from 'react';
import Card from './components/Card/Card';
import Form from './components/Form/Form';

class App extends Component {
  state = { 
    users: [
      { id: 1, name: "wiedymi", text: "I am so numb", img: "https://discuss.getsol.us/assets/avatars/9X5h7pIMaVfdrGTf.png"}
    ]
  };
  
  handleDeleteLast = (e) => {
    e.preventDefault();
    let id = +(e.target.parentNode.parentNode.dataset.key);
    this.setState({
      users:  [...this.state.users].filter( user =>  !(user.id === id) )
    });
  };
  handleAddUser = (data) => {
    if(!data.name || !data.text || !data.img){
      document.querySelectorAll('input[type="text"]').forEach((item) => item.classList.add("danger"));
      return false;
    }
    let id = [...this.state.users].length + 1;
    this.setState({
      users:  [...this.state.users, { 
        id: id, 
        name: data.name,
        text: data.text,
        img: data.img
      }]
    });
  };
  render() {
    return (
      <div className="container"> 
        <Card data={this.state.users} handle={this.handleDeleteLast}/>
        <Form handle={this.handleAddUser}/>
      </div>
    );
  }
}

export default App;
