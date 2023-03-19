import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    );
  }
}
export default Main;
