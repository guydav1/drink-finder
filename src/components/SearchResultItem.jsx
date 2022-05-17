import React from "react";
import { Col, Row } from "react-bootstrap";

const SearchResultItem = ({ drink }) => {
  const glassImageMap = {
    "Cocktail glass": "/cocktail-glass.png",
    "Shot glass": "/shot-glass.png",
    "Martini Glass": "/martini-glass.png",
    "Collins Glass": "/collins-glass.png",
    "Highball Glass": "/reg-glass.png",
  };

  return (
    <div className="bg-light p-2 mb-1 ">
      <Row>
        <Col md={2}>
          <img
            src={glassImageMap[drink["strGlass"]] || "/wine-glass.png"}
            className="img-fluid"
            alt="Glass"
          />
        </Col>
        <Col>
          <div className="fw-bold">{drink.strDrink}</div>
          <div>{drink.strCategory}</div>
        </Col>
      </Row>
    </div>
  );
};

export default SearchResultItem;
