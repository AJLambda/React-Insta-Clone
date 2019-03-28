import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';




class PostsPage extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
          data: [],
          search: '',
          searchFinder: '',
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

  //toggle likes
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

  searchPosts = e => {
    e.preventDefault();

    this.setState({
      searchFinder: this.state.search,
    })
  }

  handleSearchChanges = e => {
    this.setState({ search: e.target.value })
  }

  render () {
    return (

      <div className = "Posts-page">
        <header className="App-header">
          <SearchBar 
          searchPosts={this.searchPosts}
          handleSearchChanges={this.handleSearchChanges}/>
        </header>

        <PostContainer 
        dataProps = {this.state.data}
        toggleUserLike= {this.toggleUserLike}
       
        />

      </div>
    )
  }



}




export default PostsPage;