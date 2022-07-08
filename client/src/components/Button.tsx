import React from 'react';
import './Button.css';

class Button extends React.Component {
    name: any;
    secondary: any;
    style: any;

  constructor(props: any) {
    super(props);
    this.name = props.name;
    this.secondary = Boolean(props.secondary);
    this.style = props.style;
  }

  render() {
    if (this.secondary === true) {
      return (
        <button style={this.style} className='basicButton secondary'>
          {this.name}
        </button>
      );
    } else {
      return (
        <button style={this.style} className='basicButton'>
          {this.name}
        </button>
      );
    }
  }
}
export default Button;