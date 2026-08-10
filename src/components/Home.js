import React from "react";
import Menu from "./Menu"; // 👈 استدعاء الـ Menu هوني
import { useLanguage } from "../context/LanguageContext";

function Home(props) {
  const { t } = useLanguage();

  return (
    <div className="container my-4">
      {/* الـ Carousel يظهر هوني فقط في الصفحة الرئيسية */}
      <div className="row mb-4">
        <div className="col-12">
          <Menu />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="text-primary">{t.home}</h2>
          <p className="lead">
            مرحباً بكم في الموقع الرسمي للجمعية التونسية لإعانة الصم بمدنين.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
