import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'



// The root App component of your application should import the dummy data from the dummy-data.js file with import dummyData from './dummy-data'; and iterate over said data, passing each individual object as a prop to an instance of PostContainer.

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      likes: dummyData.likes
    };
  };

  //In `app.js` use `componentDidMount()` to set your data to the component's state. 

  //post-render actions (fetching data or event listeners)
  componentDidMount() {
    console.log('CDM Running')
    //mock data fetch
    setTimeout(() => {
      this.setState({
        data: dummyData
      });
    }, 2000);

    window.addEventListener('resize', () => {});
  }

  //clean up event listeners/subscriptions
  componentWillUnmount() {
    window.removeEventListener('resize', () => {});
  }

  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    console.log('rendering component', this.state.data)
    return (
      <div className="App">

        <header className="App-header">
        <SearchBar />
        </header>

       
        <PostContainer 
        dataProps = {this.state.data}
        incrementLike= {this.incrementLike}
        likes= {this.state.likes}
        />
        
      </div>
    );
  }
}

export default App;
