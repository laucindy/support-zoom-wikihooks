import React, { useEffect, useState } from "react";
import { SearchBar, SearchResults } from '../../components'

const Home = () => {
  const [results, setResults] = useState([]);

  function fetchResults(searchTerm = "helicopter") {
    const url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&srsearch=${searchTerm}&format=json`
    
    fetch(url)
      .then(response => response.json())
      .then(data => setResults(data.query.search));
  }

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div>
      <SearchBar fetchResults={fetchResults} />
      <SearchResults results={results} />
    </div>
  )
};

export default Home;
