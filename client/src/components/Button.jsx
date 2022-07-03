import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }

  render() {
    return <button className='basicButton'>{this.name}</button>;
  }
}
export default Button;
