import React, { Component } from "react";
import { Nav, Collapse, Navbar, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/images/atas.png";
import drapeau from "../assets/images/Flag_of_Tunisia.gif";
import logominster from "../assets/images/logo-minister.png";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img
                src={logo1}
                height="30"
                width="31"
                alt="ATAS Mednine"
                style={{ marginRight: "10px" }}
              />
              <span> ATAS Medenine</span>
            </div>
            <div className="col-4">
              <div className="col-flag">
                <img src={drapeau} alt="" width="40%"></img>
              </div>
            </div>

            <div className="col-2 offset-2">
              <img src={logominster} alt="" width="100%"></img>
            </div>
          </div>
        </div>

        <Navbar dark expand="md">
          <div className="container">
            <div className="row">
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/home">
                      <span className="fa fa-home fa-lg"></span> Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/about">
                      <span className="fa fa-info fa-lg"></span> About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/service">
                      <span className="fa fa-list fa-lg"></span> Services
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/download">
                      <span class="fa fa-download" fa-lg>
                        {" "}
                        Download
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/contact">
                      <span className="fa fa-address-card fa-lg"></span> Contact
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav navbar className="ml-auto">
                  <NavItem>
                    <NavLink className="nav-link" to="/signin">
                      <span className="fa fa-sign-in fa-lg"></span> Sign In
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/signout">
                      <span className="fa fa-sign-out fa-lg"></span> Sign Out
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Header;
