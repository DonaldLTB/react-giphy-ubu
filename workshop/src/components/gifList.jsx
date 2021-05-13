import React, { Component } from 'react';

import Gif from "./gif";

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
          <Gif gifID="13HgwGsXF0aiGY"/>
          <Gif gifID="13HgwGsXF0aiGY"/>
          <Gif gifID="13HgwGsXF0aiGY"/>
          <Gif gifID="13HgwGsXF0aiGY"/>
          <Gif gifID="13HgwGsXF0aiGY"/>
          <Gif gifID="13HgwGsXF0aiGY"/>
      </div>
    );
  }
}

export default GifList;
