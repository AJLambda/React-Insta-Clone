import React from 'react';
import "./SearchBar.css";
import { Form } from 'reactstrap';
import { Input } from 'reactstrap';

const SearchBar = (props) => {
    return ( 

      <header className="search-bar-wrapper">
        <div className="social">
          <i className="fab fa-instagram fa-2x"></i>
          <h1 className="instaText">Instagram</h1>
        </div>

        <div className = "search-bar">
          <Form onSubmit = {props.searchPosts}>
            <Input 
              type = "search"
              id = "searchbar"
              placeholder = "Search" 
              onChange = {props.handleSearchChanges}
            />
          </Form>
        </div>

        <div className="social-wrapper">

        <div className="social">
          <i className="far fa-compass fa-lg" />
        </div>
        <div className="social">
          <i className="far fa-heart fa-lg" />
        </div>
        <div className="social">
          <i className="far fa-user-circle fa-lg" />
        </div>

        </div>
      </header>

    );
};

export default SearchBar;