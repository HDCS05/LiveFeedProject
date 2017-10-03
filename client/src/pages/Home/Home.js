import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Home extends Component {
  //state = {
   // book: {}
  //};
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getBook(this.props.match.params.id)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <Container fluid>
            <Jumbotron>
              <h1>
                Live Feeds
              </h1>
              <p>
              As a food enthusiast, I would like to reduce the time and effort I spend shopping in the greocery store... Because I want to spend more time cooking, and less time at the store.
              </p>
             
            </Jumbotron>
        <Row>
          <Col size="md-12">

          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>User Story</h1>
              <p>
               
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">Back to Authors</Link>
          </Col>
        </Row>


</Container>
    );
  }
}

export default Home;
