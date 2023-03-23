import React from "react";

function Footer(props) {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer fixed-bottom">
      <div className="container">
        <div class="row-footer">
          <p>© Copyright {year} AtasMedenine</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
