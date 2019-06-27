import React from 'react';
import './Card.css';
import Button from '../Button/Button';

let Card = ( props ) => {
  const cardList = props.data.map((v) => {
    return (
      <div className="card" key={ v.id } data-key={ v.id }>
        <img src={v.img} alt={v.name}></img>
        <div className="info">
          <h1>{ v.name }</h1>
          <p>{ v.text }</p>
          <Button name="Delete This User" handle={props.handle}/>
        </div>
      </div>
    );
  });
  return (
    <div className="card-list">
      { cardList }
    </div>
  );
}

export default Card;
