import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import DrinkDetails from "./components/DrinkDetails";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Container fluid style={{ width: "80%" }}>
      <Col md={6} className="mx-auto">
        <Search />
      </Col>
      <Row>
        <Col md={4}>
          <SearchResults />
        </Col>
        <Col md={8}>
          <DrinkDetails />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
