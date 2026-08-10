import React from "react";

function Download() {
  return (
    <div className="container my-5" style={{ direction: "rtl" }}>
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="text-primary mb-3 font-weight-bold">
            تنزيل الوثائق والمستندات
          </h2>
          <p className="lead text-muted">
            يمكنكم تنزيل الوثائق والاستمارات الرسمية الخاصة بالجمعية التونسية
            لمساعدة الصم بمدنين
          </p>
        </div>
      </div>

      {/* قائمة الملفات للتحميل */}
      <div className="row mt-4 justify-content-center">
        <div className="col-md-8">
          <div className="list-group">
            <a
              href="#download"
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-3 shadow-sm"
            >
              <span className="d-flex align-items-center">
                <i className="fa fa-file-pdf-o text-danger fa-lg ml-3"></i>
                <span className="font-weight-bold">
                  مطلب التسجيل بالجمعية (PDF)
                </span>
              </span>
              <span className="badge badge-primary badge-pill p-2">
                <i className="fa fa-download fa-lg"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
