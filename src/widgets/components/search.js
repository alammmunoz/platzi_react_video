import React from 'react';
import './search.css';
/* function Search(props) {
  return (
    
  )
} */

const Search = () => (
  <form
    action=""
    classNam ="Search"
  >
    <input
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
    />
  </form>
)

export default Search;