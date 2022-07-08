import React from 'react';
import './Button.css';

export interface ButtonProps {
    name: String;
    secondary: boolean;
    style: any;
}


// https://www.google.com/search?q=Creating+a+component+typescript&rlz=1C1GCEU_frCA1012CA1012&oq=Creating+a+component+typescript&aqs=chrome..69i57j0i22i30j0i390l3.8087j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_NpzHYvKKEam15NoPgtGaoAc20

class Button extends React.Component {

  constructor(props: ButtonProps) {
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