import React from "react";
import { useGlobalContext } from "../context/context";

function SearchForm() {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.type);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="search" className="form-label">
          Search your favourite cocktail you want
        </label>
        <input placeholder="Enter cocktail" id="search" type="text" className="form-control" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
    </form>
  );
}

export default SearchForm;
