import moment from "moment";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchRandomDrink } from "../actions";

const DrinkDetails = ({ drink, fetchRandomDrink }) => {
  useEffect(() => {
    fetchRandomDrink();
  }, [fetchRandomDrink]);

  const [showImage, setShowImage] = useState(false);

  const handleClose = () => setShowImage(false);
  const handleShow = () => setShowImage(true);

  const ing = [];

  for (let i = 1; i <= 15; i++) {
    if (drink["strIngredient" + i]) {
      ing.push({
        ingredient: drink["strIngredient" + i],
        measure: drink["strMeasure" + i],
      });
    } else {
      break;
    }
  }

  return (
    <>
      <Container className="p-4 border rounded-3 shadow-sm">
        <Row>
          <Col md={9}>
            <Card.Title>{drink.strDrink}</Card.Title>
            <Card.Subtitle>{drink.strCategory}</Card.Subtitle>
            Suggested Glass: {drink.strGlass}
            <p>{drink.strInstructions}</p>
            Ingredients: <br />
            <Table bordered size="sm">
              <tbody>
                {ing.map((ingr, index) => (
                  <tr key={index}>
                    <td>{ingr.ingredient}</td>
                    <td>{ingr.measure}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {drink.dateModified && (
              <span className="text-muted fs-6">
                {moment(
                  drink.dateModified.substring(0, 10),
                  "YYYY-MM-DD",
                  true
                ).format("DD-MM-YYYY")}
              </span>
            )}
          </Col>
          <Col md={3}>
            <img
              src={drink.strDrinkThumb}
              width="100%"
              alt=""
              className="clickable"
              onClick={handleShow}
            />
          </Col>
        </Row>
      </Container>
      <Modal show={showImage} onHide={handleClose}>
        <Modal.Body>
          <img src={drink.strDrinkThumb} width="100%" alt="" />
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  drink: state.selectedDrink,
});

export default connect(mapStateToProps, { fetchRandomDrink })(DrinkDetails);
