import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';




class PostsPage extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
          data: [],
        }
    }

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

  toggleUserLike = (id, userLike, e) => {
    this.setState({
      data: this.state.data.map(item => {
        return item.id === id
          ? {
            ...item,
            userLike: !item.userLike,
            likes: userLike ? item.likes-1 : item.likes+1,
          }
          : item;
      })
    })
  }

  render () {
    return (

      <div className = "Posts-page">
      <header className="App-header">
      <SearchBar />
      </header>

      
      <PostContainer 
      dataProps = {this.state.data}
      toggleUserLike= {this.toggleUserLike}
      likes= {this.state.likes}
      />
      </div>
    )
  }



}




export default PostsPage;