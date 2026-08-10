import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import logo1 from "../assets/images/atas.png";

const NewsCarousel = () => {
  // قائمة آخر الأخبار
  const latestNews = [
    {
      id: 1,
      title: "افتتاح السنة التأهيلية والتربوية الجديدة بمركز الجمعية بمدنين",
      image: logo1,
    },
    {
      id: 2,
      title: "تنظيم ورشة عمل وتأهيل حرفي لفائدة منخرطي الجمعية",
      image: logo1,
    },
    {
      id: 3,
      title: "يوم مفتوح للفحوصات والأنشطة الترفيهية والتضامنية",
      image: logo1,
    },
  ];

  return (
    <div className="news-carousel-container my-4" style={{ direction: "ltr" }}>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={600}
        swipeable={true}
        emulateTouch={true}
        // مخصص لتأكيد ظهور أزرار Left / Right على الأطراف
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="btn btn-dark position-absolute"
              style={{
                left: 15,
                top: "calc(50% - 15px)",
                zIndex: 2,
                opacity: 0.8,
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                padding: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fa fa-chevron-left"></i>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="btn btn-dark position-absolute"
              style={{
                right: 15,
                top: "calc(50% - 15px)",
                zIndex: 2,
                opacity: 0.8,
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                padding: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="fa fa-chevron-right"></i>
            </button>
          )
        }
      >
        {latestNews.map((item) => (
          <div key={item.id} className="position-relative">
            <img
              src={item.image}
              alt={item.title}
              style={{
                maxHeight: "400px",
                objectFit: "contain",
                backgroundColor: "#f8f9fa",
                padding: "20px",
              }}
            />
            {/* عنوان الخبر باللغة العربية */}
            <p
              className="legend"
              style={{
                fontSize: "1.1rem",
                padding: "12px",
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                direction: "rtl",
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
