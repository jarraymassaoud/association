import React from "react";

function Footer(props) {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              BP... Medenine 4100
              <br />
              Medenine Tunisia
              <br />
              <i className="fa fa-phone fa-lg"></i>: +216........
              <br />
              <i className="fa fa-fax fa-lg"></i>: +216..........
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:confusion@food.net">atasmedenine@social.tn</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>

              <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright {year} AtasMedenine</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
