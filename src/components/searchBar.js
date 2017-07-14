import React, { Component } from 'react';
// React, { Component } is the same thing as const Component = React.Component; (ES6)

// SearchBar class is given functionality that React.Component has.
// In general, it is recommended to start with Functional Component first, and then with added functionality, build class based components if needed.

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = { term : '' };
  }

  render() {
    //never change the state directly like this.state.term = something --- Bad!!! always use a method to change state!
    return (
      <div>
        <input
        //controlled component
        value = {this.state.term}
        onChange = {event => this.setState({ term: event.target.value })} />
      </div>
    );
  }


}



export default SearchBar;
