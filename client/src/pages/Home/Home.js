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
              Bacon ipsum dolor amet beef ribs doner capicola frankfurter rump salami spare ribs flank. Meatball filet mignon ham sirloin boudin. Prosciutto picanha leberkas sirloin. Pastrami pork chop tail swine doner, ham hock ground round landjaeger cupim tongue bresaola beef bacon shank. Boudin short loin capicola strip steak, cupim bresaola kielbasa. Drumstick pork pork loin andouille boudin picanha tri-tip ham hock burgdoggen biltong chicken. Andouille ham alcatra sausage prosciutto, salami sirloin.
              </p>
             
            </Jumbotron>
        <Row>
          <Col size="md-12">

          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
               
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
