import React, { useState } from "react";
import './SearchBar.scss'

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchResults(searchQuery);
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="search">
      <h1>Tell me about...</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" className="search__bar" value={searchQuery} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
      
    </div>
  )
};

export default SearchBar;
