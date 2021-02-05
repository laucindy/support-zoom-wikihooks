import React from "react";
import { SearchResult } from '../../components'
import './SearchResults.scss'

const SearchResults = (props) => {
  const results = props.results;

  return (
    <div className="searchResults">
      <h1>Search Results</h1>
      {(results.length > 0)
      ? results.map((result) => <SearchResult result={result} key={result.pageid} />)
      : <p>No results found, please enter another search query.</p>
      }
    </div>
  )
};

export default SearchResults;
