import React from "react";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Drink from "./pages/Drink";
import Contact from "./pages/Contact";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Header>
          <Navbar />
        </Header>
        <Content style={{ padding: "40px 50px" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/drink/:id" component={Drink} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Content>
        <Footer>Ant Design ©2022 Created by Ant UED</Footer>
      </Router>
    </div>
  );
}

export default App;
