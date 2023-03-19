import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
function Header(props) {
  return (
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">A.T.A.S Medenine</NavbarBrand>
      </div>
    </Navbar>
  );
}

export default Header;
