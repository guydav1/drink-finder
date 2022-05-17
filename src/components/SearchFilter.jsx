import React from "react";
import { Form } from "react-bootstrap";

const SearchFilter = ({ handleFilterText, handleFilterBy, resultsQuery }) => {
  return (
    <>
      <Form.Group>
        <Form.Control
          type="search"
          placeholder="Enter text"
          value={resultsQuery.filterText}
          onChange={handleFilterText}
        />
        <Form.Select onChange={handleFilterBy}>
          <option value="category">Category</option>
          <option value="ingredient">Ingredient</option>
        </Form.Select>
      </Form.Group>
    </>
  );
};

export default SearchFilter;
