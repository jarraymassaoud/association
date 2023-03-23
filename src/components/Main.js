import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { PRODUCTS } from "../shared/product";
import { NEWS } from "../shared/news";
import { DOCUMENTS } from "../shared/document";
import Download from "./Download";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: PRODUCTS,
      news: NEWS,
      documents: DOCUMENTS,
    };
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          product={this.state.products.filter((product) => product.featured)[0]}
          newss={this.state.news.filter((newss) => newss.featured)[0]}
          document={
            this.state.documents.filter((document) => document.featured)[0]
          }
        />
      );
    };
    const ContactPage = () => {
      return <Contact />;
    };
    const ServicePage = () => {
      return <Services />;
    };
    const DownloadPage = () => {
      return <Download />;
    };
    const AboutPage = () => {
      return <About />;
    };

    return (
      <div>
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="menu">
                <Menu />
              </div>
            </div>
            <div className="col-6">
              <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/service" component={ServicePage} />
                <Route path="/download" component={DownloadPage} />

                <Redirect to="/home" />
              </Switch>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Main;
