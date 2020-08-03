import React, { Component } from 'react';
import { string, number, bool } from 'prop-types';
import './footer.css'

export class Footer extends Component {
  constructor () {
    super();
    this.state = {
      isClicked: false,
    };
  }
  static propTypes = {
    text: string.isRequired,
    number: number,
    bool: bool,
  }

  // state = {
  //   isClicked: false,
  // };

  handleOnClick = () => (
    this.setState({
      isClicked: true,
    })
  );

  render() {
    const { text, number, bool } = this.props;

    return (
      <footer>
        <button onClick={this.handleOnClick}>Click</button>
        This is a {text}
        <p className={`text-${this.state.isClicked ? 'isActive' : 'notActive'}`}>Number is {number}</p>
        Bool is {`${bool}`}
      </footer>
    );
  }
};

// Footer.propTypes = {
//   text: string.isRequired,
//   number: number,
//   bool: bool,
// };
