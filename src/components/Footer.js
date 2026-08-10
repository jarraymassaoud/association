import React from "react";

function Footer() {
  let year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="mb-0">
              © {year} جميع الحقوق محفوظة - الجمعية التونسية للمساعدة الصم
              بمدنين
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
