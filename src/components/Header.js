import React, { useState } from "react";
import { Nav, Collapse, Navbar, NavItem, NavbarToggler } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/images/atas.png";
import drapeau from "../assets/images/Flag_of_Tunisia.gif";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <React.Fragment>
      {/* الشريط العلوي باللغة العربية دائماً (RTL) */}
      <div className="container my-2" style={{ direction: "rtl" }}>
        <div className="row align-items-center">
          {/* اللوجو والاسم على اليمين */}
          <div className="col-6 d-flex align-items-center">
            <img
              src={logo1}
              height="35"
              width="36"
              alt="ATAS Medenine"
              style={{ marginLeft: "10px" }}
            />
            <span className="font-weight-bold h5 mb-0">
              الجمعية التونسية للمساعدة الصم بمدنين
            </span>
          </div>

          {/* علم تونس على اليسار */}
          <div className="col-6 d-flex justify-content-end align-items-center">
            <img src={drapeau} alt="علم تونس" style={{ width: "40px" }} />
          </div>
        </div>
      </div>

      {/* القائمة الرئيسية مرتبة من اليمين إلى اليسار */}
      <Navbar dark expand="md" style={{ direction: "rtl" }}>
        <div className="container">
          <NavbarToggler onClick={toggleNav} />
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar className="w-100 d-flex justify-content-start pr-0">
              <NavItem className="ml-4">
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg ml-1"></span> الرئيسية
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink className="nav-link" to="/about">
                  <span className="fa fa-info fa-lg ml-1"></span> حول الجمعية
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink className="nav-link" to="/service">
                  <span className="fa fa-list fa-lg ml-1"></span> الخدمات
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink className="nav-link" to="/download">
                  <span className="fa fa-download fa-lg ml-1"></span> التنزيلات
                </NavLink>
              </NavItem>
              <NavItem className="ml-4">
                <NavLink className="nav-link" to="/contact">
                  <span className="fa fa-address-card fa-lg ml-1"></span> اتصل
                  بنا
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
