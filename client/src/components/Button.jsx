import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.secondary = Boolean(props.secondary);
  }

  render() {
    console.log(this.secondary);
    if (this.secondary === true) {
      return <button className='basicButton secondary'>{this.name}</button>;
    } else {
      return <button className='basicButton'>{this.name}</button>;
    }
  }
}
export default Button;
