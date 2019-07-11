import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";

import Example from "./example";

const App = ({children }) => (
  <Container style={{ margin: 30 }}>
  {children}
  </Container>
);

ReactDOM.render(
  <App>
    <Example />
  </App>,
  document.getElementById("root")
);