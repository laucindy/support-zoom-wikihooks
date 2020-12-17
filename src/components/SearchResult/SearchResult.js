import React from "react";
import ReactHtmlParser from 'react-html-parser';
import './SearchResult.scss'

const SearchResult = (props) => {
  const result = props.result;
  const source_page = `http://en.wikipedia.org/?curid=${result.pageid}`

  return (
    <div className="searchResult">
      <h4><a href={source_page}>{result.title}</a></h4>
      <p>{ReactHtmlParser(result.snippet)}...</p>
    </div>
  )
};

export default SearchResult;
