import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Welcome extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Welcome Page
              </h1>
             <button className="btn btn-success"><Link to="/login">login</Link></button>
               <button className="btn btn-danger"><Link to="/signup">sign up</Link></button>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Welcome;
