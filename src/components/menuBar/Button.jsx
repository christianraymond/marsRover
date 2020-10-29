import React from 'react';

const Button = (props) => {  
    return (
      <span
        className="btn pink darken-4" 
        onClick={props.toggle}
        >
        {props.name}
      </span>
    )
  }
  export default Button;
  