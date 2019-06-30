import React, { Component } from 'react';
import Card from './components/Card/Card';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  state = { 
    users: [
      { id: 1, name: "wiedymi", text: "I am so numb", img: "https://discuss.getsol.us/assets/avatars/9X5h7pIMaVfdrGTf.png"}
    ]
  };
  handleDeleteUser = (e) => {
    e.preventDefault();
    let id = +(e.target.parentNode.parentNode.dataset.key);
    this.setState({
      users:  [...this.state.users].filter(user => !(user.id === id))
    });
    //console.log(this.state.users);
  };
  handleAddUser = (data) => {
    
    if(!data.name || !data.text || !data.img){
      document.querySelectorAll('input[type="text"]').forEach((item) => {
        return (item.value.length < 3) ? item.classList.add("danger") : null
      });
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
    return true;
  };
  render() {
    return (
      <div>
        <Header />
        <div className="container"> 
          <Card data={this.state.users} handle={this.handleDeleteUser}/>
          <Form handle={this.handleAddUser}/>
        </div>
      </div>
    );
  }
}

export default App;
