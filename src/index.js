import React from 'react';
import ReactDOM from 'React-dom';

import SearchBar from './components/searchBar';


 // Create a new component that produces some HTML

 const App = () => {
   return (
    <div>
      <SearchBar />
    </div>
  );
 }
 // Take this component's generated HTML and put it on the browser page (on the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
