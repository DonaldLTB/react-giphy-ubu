import React, { Component } from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  render() {
    return (
        <div>
         <input type="text" className="form-search form-control" />
        </div>
    );
  }
}

export default SearchBar;
