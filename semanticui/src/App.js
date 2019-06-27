import React, { Fragment } from 'react';
import { Container, Header, List } from "semantic-ui-react";
import ReactDOM from "react-dom";

import Menu from './menu';
import Login from './login';
import Example from './example';

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h3"></Header>
    <List bulleted>
      <List.Item
        as="a"
        content=""
        href="https://react.semantic-ui.com/"
        target="_blank"
      />
      <List.Item
        as="a"
        content=""
        href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"
        target="_blank"
      />
      <Fragment>
    <Menu />
    <Container>
      <Login />
    </Container>
  </Fragment>
    </List>

    {children}
  </Container>
);
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <Example />
  </App>,
  document.getElementById("root")
);

export default App;