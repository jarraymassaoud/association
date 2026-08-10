import React, { useState } from "react";
import { Nav, Collapse, Navbar, NavItem, NavbarToggler } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/images/atas.png";
import drapeau from "../assets/images/Flag_of_Tunisia.gif";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  return (
    <React.Fragment>
      {/* الشريط العلوي */}
      <div className="container my-2" style={{ direction: "rtl" }}>
        <div className="row align-items-center justify-content-between">
          <div className="col-9 col-md-8 d-flex align-items-center">
            <img
              src={logo1}
              height="35"
              width="36"
              alt="ATAS Medenine"
              style={{ marginLeft: "10px", flexShrink: 0 }}
            />
            <span className="font-weight-bold h6 h5-md mb-0 text-dark">
              الجمعية التونسية للمساعدة الصم بمدنين
            </span>
          </div>

          <div className="col-3 col-md-4 d-flex justify-content-end align-items-center">
            <img
              src={drapeau}
              alt="علم تونس"
              style={{ width: "35px", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* 🟢 القائمة الرئيسية بخلفية فاتحة ولون خط أسود (Noir) */}
      <Navbar
        light
        expand="md"
        className="bg-light border-top border-bottom shadow-sm"
        style={{ direction: "rtl", zIndex: 9999, position: "relative" }}
      >
        <div className="container">
          {/* زر الموبايل */}
          <NavbarToggler onClick={toggleNav} className="ms-auto" />

          <Collapse isOpen={isNavOpen} navbar>
            <Nav
              navbar
              className="w-100 d-flex justify-content-start pr-0 py-2 py-md-0"
            >
              <NavItem className="ml-md-4 my-2 my-md-0">
                <NavLink
                  className="nav-link text-dark fw-bold"
                  style={{ color: "#000000" }}
                  to="/home"
                  onClick={closeNav}
                >
                  <span className="fa fa-home fa-lg ml-1 text-dark"></span>{" "}
                  الرئيسية
                </NavLink>
              </NavItem>
              <NavItem className="ml-md-4 my-2 my-md-0">
                <NavLink
                  className="nav-link text-dark fw-bold"
                  style={{ color: "#000000" }}
                  to="/about"
                  onClick={closeNav}
                >
                  <span className="fa fa-info fa-lg ml-1 text-dark"></span> حول
                  الجمعية
                </NavLink>
              </NavItem>
              <NavItem className="ml-md-4 my-2 my-md-0">
                <NavLink
                  className="nav-link text-dark fw-bold"
                  style={{ color: "#000000" }}
                  to="/service"
                  onClick={closeNav}
                >
                  <span className="fa fa-list fa-lg ml-1 text-dark"></span>{" "}
                  الخدمات
                </NavLink>
              </NavItem>
              <NavItem className="ml-md-4 my-2 my-md-0">
                <NavLink
                  className="nav-link text-dark fw-bold"
                  style={{ color: "#000000" }}
                  to="/download"
                  onClick={closeNav}
                >
                  <span className="fa fa-download fa-lg ml-1 text-dark"></span>{" "}
                  التنزيلات
                </NavLink>
              </NavItem>
              <NavItem className="ml-md-4 my-2 my-md-0">
                <NavLink
                  className="nav-link text-dark fw-bold"
                  style={{ color: "#000000" }}
                  to="/contact"
                  onClick={closeNav}
                >
                  <span className="fa fa-address-card fa-lg ml-1 text-dark"></span>{" "}
                  اتصل بنا
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
