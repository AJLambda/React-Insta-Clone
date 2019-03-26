import React from 'react';
import "./SearchBar.css";


const SearchBar = (props) => {
    return ( 
        <div className="search-bar-wrapper">
        <div className="social">
        <i className="fas fa-instagram" />
        </div>
        <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
        </div>
        <div className="social-wrapper">
          <div className="social">
            <i className="fas fa-compass" />
          </div>
          <div className="social">
            <i className="fas fa-heart" />
          </div>
          <div className="social">
            <i className="fas fa-user-circle" />
          </div>
        </div>
      </div>

    );
};

export default SearchBar;