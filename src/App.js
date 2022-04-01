import React from "react";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Drink from "./pages/Drink";
import Category from "./pages/Category";
import Contact from "./pages/Contact";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Header>
            <Navbar />
          </Header>
          <Content style={{ padding: "40px 50px" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/drink/:id" component={Drink} />
              <Route exact path="/category/:category" component={Category} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center', background: '#ffffff' }}>The Cocktail ©2022 Created by Bagus Pramajaya</Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
