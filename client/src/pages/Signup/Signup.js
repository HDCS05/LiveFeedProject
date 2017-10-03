import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from "axios";

class Signup extends Component {
  state = {
    username: "",
    password: "",
  
  };

  componentDidMount() {
    //this.loadBooks();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

        // get our form data out of state
        const { username, password } = this.state;

        axios.post('/auth/signup', { username, password})
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Signup</h1>
            </Jumbotron>
            <form onSubmit={this.handleFormSubmit}>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (Required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="Password (Required)"
              />
              <button type="submit">Signup</button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
