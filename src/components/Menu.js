import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import logo1 from "../assets/images/logo192.png";

const Menu = () => {
  return (
    <Carousel infiniteLoop={false}>
      <div>
        <img src={logo1} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={logo1} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={logo1} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Menu;
//how to create react-responsive-carousel?
