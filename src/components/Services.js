import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";

function Services() {
  // قائمة الخدمات المكتوبة مباشرة باللغة العربية
  const servicesList = [
    {
      id: 1,
      title: "التربية والتعليم الخاص",
      description:
        "تقديم برامج تعليمية وتأهيلية موجهة للأشخاص ذوي الإعاقة لمساعدتهم على الإدماج وتطوير مهاراتهم.",
      icon: "fa-book",
      color: "border-primary text-primary",
      bgColor: "bg-light",
    },
    {
      id: 2,
      title: "التأهيل والتكوين المهني",
      description:
        "ورشات عمل وتدريبات مهنية مخصصة لإكساب المنخرطين حرفاً ومهارات تساعدهم على الاستقلالية والعمل.",
      icon: "fa-cogs",
      color: "border-success text-success",
      bgColor: "bg-light",
    },
    {
      id: 3,
      title: "الرعاية الصحية والعلاج الطبيعي",
      description:
        "متابعة صحية مستمرة ورعاية متعددة الاختصاصات تشمل العلاج الطبيعي والمواكبة النفسية.",
      icon: "fa-stethoscope",
      color: "border-info text-info",
      bgColor: "bg-light",
    },
    {
      id: 4,
      title: "الإدماج والأنشطة الاجتماعية",
      description:
        "تنظيم أنشطة ثقافية، رياضية وترفيهية تهدف إلى تعزيز التضامن والإدماج الاجتماعي الكامل.",
      icon: "fa-heartbeat",
      color: "border-warning text-warning",
      bgColor: "bg-light",
    },
  ];

  return (
    <div className="container my-4" style={{ direction: "rtl" }}>
      {/* Breadcrumb */}
      <Row>
        <Col className="col-12">
          <Breadcrumb className="p-0 bg-transparent">
            <BreadcrumbItem>
              <Link to="/home">الرئيسية</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>الخدمات</BreadcrumbItem>
          </Breadcrumb>
          <h3 className="font-weight-bold">خدمات الجمعية</h3>
          <p className="text-muted">
            نقدم مجموعة متنوعة من الخدمات الموجهة لدعم وتأهيل الأشخاص ذوي
            الإعاقة بمدنين.
          </p>
          <hr />
        </Col>
      </Row>

      {/* Services Grid */}
      <Row className="row-content">
        {servicesList.map((service) => (
          <Col xs="12" md="6" key={service.id} className="mb-4">
            <Card className={`h-100 shadow-sm ${service.bgColor}`}>
              <CardBody className="d-flex align-items-start">
                {/* تم استبدال mr-3 بـ ml-3 ليصبح الفراغ بين الأيقونة والنص صحيحاً في العربي */}
                <div
                  className={`p-3 ml-3 rounded-circle border ${service.color}`}
                >
                  <i className={`fa ${service.icon} fa-2x`}></i>
                </div>
                <div className="text-right">
                  <CardTitle tag="h5" className="font-weight-bold">
                    {service.title}
                  </CardTitle>
                  <CardText className="text-secondary">
                    {service.description}
                  </CardText>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Services;
