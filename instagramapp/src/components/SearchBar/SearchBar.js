import React from 'react';
import "./SearchBar.css";


const SearchBar = (props) => {
    return ( 
        <div className="search-bar-wrapper">
        <div className="social">
        <i className="fab fa-instagram fa-2x"></i>
        <h1 className="instaText">Instagram</h1>
        </div>
        <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
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
      </div>

    );
};

export default SearchBar;