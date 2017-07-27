import React, { Component } from 'react';
import ReactDOM from 'React-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';

 // Create a new component that produces some HTML


 class App extends Component {
   constructor(props) {
     super(props);

     this.state = { videos: [] };

     YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
       this.setState({ videos });
       // this.setState({ videos: videos }) in ES5
     });
   }
   render () {
     return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
 }

 // Take this component's generated HTML and put it on the browser page (on the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
