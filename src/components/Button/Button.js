import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <a className="button" href="#btn" onClick={props.handle}> 
     { props.name }
    </a>
  );
}

export default Button;
