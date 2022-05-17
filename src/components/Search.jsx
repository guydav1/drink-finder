import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { searchDrinks } from "../actions";
import PreviousSearchList from "./PreviousSearchList";

const Search = ({ searchValue, searchDrinks, previousSearches }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(
    searchParams.get("s") || searchValue
  );

  useEffect(() => {
    //Perform search on load in case url had search param
    handleSearch();
  }, []);

  useEffect(() => {
    //Sync state with URL param and text input
    if (searchValue === "") return;
    setSearchInput(searchValue);
    setSearchParams({ s: searchValue });
  }, [searchValue, setSearchParams]);

  const handleSearch = () => {
    if (searchInput === "") return;
    searchDrinks(searchInput);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="p-3">
      <div className="mb-3">
        <InputGroup>
          <Form.Control
            type="search"
            name="search"
            placeholder="Search Cocktail..."
            value={searchInput}
            onChange={handleChange}
          />
          <Button
            variant="primary"
            as="input"
            type="button"
            value="Search"
            onClick={handleSearch}
          />
        </InputGroup>
      </div>
      {previousSearches && (
        <PreviousSearchList
          previousSearchValues={previousSearches}
          selectSearchValue={searchDrinks}></PreviousSearchList>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    previousSearches: state.previousSearches,
    searchValue: state.searchValue,
  };
};

export default connect(mapStateToProps, { searchDrinks })(Search);
