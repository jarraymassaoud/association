import React, { useState } from "react";
import { Nav, Collapse, Navbar, NavItem, NavbarToggler } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/images/atas.png";
import drapeau from "../assets/images/Flag_of_Tunisia.gif";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  // دالة لإغلاق القائمة في التلفون عند النقر على أي رابط
  const closeNav = () => setIsNavOpen(false);

  return (
    <React.Fragment>
      {/* الشريط العلوي متجاوب لجميع الشاشات */}
      <div className="container my-2" style={{ direction: "rtl" }}>
        <div className="row align-items-center justify-content-between">
          {/* اللوجو والاسم - يأخذ المساحة الكاملة المتاحة */}
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

          {/* علم تونس على اليسار */}
          <div className="col-3 col-md-4 d-flex justify-content-end align-items-center">
            <img
              src={drapeau}
              alt="علم تونس"
              style={{ width: "35px", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* القائمة الرئيسية مرتبة ومتجاوبة */}
      <Navbar dark expand="md" style={{ direction: "rtl" }}>
        <div className="container">
          {/* زر التلفون (Hamburger Button) */}
          <NavbarToggler onClick={toggleNav} className="ms-auto" />

          <Collapse isOpen={isNavOpen} navbar>
            <Nav
              navbar
              className="w-100 d-flex justify-content-start pr-0 py-2 py-md-0"
            >
              <NavItem className="ml-md-4 my-1 my-md-0">
                <NavLink className="nav-link" to="/home" onClick={closeNav}>
                  <span className="fa fa-home fa-lg ml-1"></span> الرئيسية
                </NavLink>
              </NavItem>
              <NavItem className="ml-md-4 my-1 my-md-0">
                <NavLink className="nav-link" to="/about" onClick={closeNav}>
                  <span className="fa fa-info fa-lg ml-1"></span> حول الجمعية
                </NavLink>
              </NavItem>
              <NavItem className="ml-md-4 my-1 my-md-0">
                <NavLink className="nav-link" to="/service" onClick={closeNav}>
                  <span className="fa fa-list fa-lg ml-1"></span> الخدمات
                </NavLink>
              </NavItem>
              <NavItem className="ml-md-4 my-1 my-md-0">
                <NavLink className="nav-link" to="/download" onClick={closeNav}>
                  <span className="fa fa-download fa-lg ml-1"></span> التنزيلات
                </NavLink>
              </NavItem>
              <NavItem className="ml-md-4 my-1 my-md-0">
                <NavLink className="nav-link" to="/contact" onClick={closeNav}>
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
