import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to the Friends App!</h1>
          <p className="lead">You must be logged in to use this App.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;