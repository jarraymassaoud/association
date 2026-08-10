import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import Download from "./Download";
import { Switch, Route, Redirect } from "react-router-dom";
import { PRODUCTS } from "../shared/product";
import { NEWS } from "../shared/news";
import { DOCUMENTS } from "../shared/document";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: PRODUCTS || [],
      news: NEWS || [],
      documents: DOCUMENTS || [],
    };
  }

  render() {
    return (
      <div className="site-wrapper">
        <Header />

        <main className="container my-3 main-content">
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/service" component={Services} />
            <Route path="/download" component={Download} />
            <Redirect to="/home" />
          </Switch>
        </main>

        <Footer />
      </div>
    );
  }
}

export default Main;
