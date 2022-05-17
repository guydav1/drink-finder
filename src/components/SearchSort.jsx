import React from "react";
import { Form } from "react-bootstrap";

const SearchSort = ({ setSortField }) => {
  return (
    <Form.Select onChange={setSortField}>
      <option value="strDrink">Name</option>
      <option value="-dateModified">Date</option>
    </Form.Select>
  );
};

export default SearchSort;
