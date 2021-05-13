import React, { Component } from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  render() {
    const { gifID } = this.props;
    const url = `https://media.giphy.com/media/${gifID}/giphy.gif`;
    return (
      <img src={url} alt="gif" className="gif" />
    );
  }
}

export default Gif;