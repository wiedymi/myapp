import React, { Component } from 'react';
import './Card.css';
import Button from '../Button/Button';

class Card extends Component {

  render() {
    let cardList = undefined;
    if(this.props.data.length === 0){
      cardList = (
        <div className="card">
          <h1>No users</h1>  
        </div>
      );
    }
    else
    {
      cardList = this.props.data.map((v) => {
        return (
          <div className="card" key={ v.id } data-key={ v.id }>
            <img src={v.img} alt={v.name}></img>
            <div className="info">
              <h1>{ v.name }</h1>
              <p>{ v.text }</p>
              <Button name="Delete This User" handle={this.props.handle}/>
            </div>
          </div>      
        );
      });
    }

    return (
      <div className="card-list">
        { cardList }
      </div>
    );
  }

 

}

export default Card;
