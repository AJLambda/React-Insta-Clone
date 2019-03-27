import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './components/authentication/withAuthenticate'

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

// The root App component of your application should import the dummy data from the dummy-data.js file with import dummyData from './dummy-data'; and iterate over said data, passing each individual object as a prop to an instance of PostContainer.

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      likes: dummyData.likes
    };
  };


  render() {
    console.log('rendering component', this.state.data)
    return (
      <div className="App">

      <ComponentFromWithAuthenticate />
        
      </div>
    );
  }
}

export default App;
