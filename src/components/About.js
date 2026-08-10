import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";
import logoAtas from "../assets/images/atas.png";

function About() {
  return (
    <div className="container my-4" style={{ direction: "rtl" }}>
      {/* Breadcrumb المسار */}
      <Row>
        <Col className="col-12">
          <Breadcrumb className="p-0 bg-transparent">
            <BreadcrumbItem>
              <Link to="/home">الرئيسية</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>حول الجمعية</BreadcrumbItem>
          </Breadcrumb>
          <h3 className="font-weight-bold">حول الجمعية</h3>
          <hr />
        </Col>
      </Row>

      {/* التعريف بالجمعية واللوجو */}
      <Row className="row-content align-items-center mb-5">
        <Col xs="12" md="8" className="text-right">
          <h4 className="text-primary mb-3 font-weight-bold">
            الجمعية التونسية للمساعدة الصم بمدنين
          </h4>
          <p className="lead text-dark">
            جمعية التآزر والتضامن بمدنين هي منظمة غير حكومية وغير ربحية تعمل على
            دعم ورعاية الأشخاص ذوي الإعاقة وتسهيل إدماجهم في المجتمع.
          </p>
          <p className="text-secondary">
            تسعى الجمعية منذ تأسيسها إلى تقديم الخدمات التربوية، التأهيلية
            والصحية للمستفيدين، وتوفير المرافقة اللازمة لعائلاتهم لضمان حياة
            كريمة وفرص متكافئة للجميع.
          </p>
        </Col>
        <Col xs="12" md="4" className="text-center mt-3 mt-md-0">
          <img
            src={logoAtas}
            alt="جمعية التآزر والتضامن بمدنين"
            className="img-fluid rounded p-3 bg-light shadow-sm border"
            style={{ maxHeight: "200px" }}
          />
        </Col>
      </Row>

      {/* أهداف الجمعية */}
      <Row className="row-content mb-5">
        {/* التربية والتعليم */}
        <Col xs="12" md="4" className="mb-3">
          <Card className="h-100 shadow-sm border-0 bg-light">
            <CardHeader className="bg-primary text-white text-center">
              <i className="fa fa-graduation-cap fa-2x mb-2"></i>
              <CardTitle tag="h5" className="mb-0 font-weight-bold">
                التربية والتعليم
              </CardTitle>
            </CardHeader>
            <CardBody className="text-right">
              <CardText className="text-secondary">
                توفير برامج تعليمية وتدريبية متخصصة تناسب القدرات الفردية لكل
                منخرط وتساعده على تطوير مهاراته الذهنية والتواصلية.
              </CardText>
            </CardBody>
          </Card>
        </Col>

        {/* الإدماج الاجتماعي */}
        <Col xs="12" md="4" className="mb-3">
          <Card className="h-100 shadow-sm border-0 bg-light">
            <CardHeader className="bg-success text-white text-center">
              <i className="fa fa-users fa-2x mb-2"></i>
              <CardTitle tag="h5" className="mb-0 font-weight-bold">
                الإدماج الاجتماعي
              </CardTitle>
            </CardHeader>
            <CardBody className="text-right">
              <CardText className="text-secondary">
                تعزيز حضور الأشخاص ذوي الإعاقة في المجتمع من خلال الأنشطة
                الترفيهية، الثقافية والرياضية التشاركية.
              </CardText>
            </CardBody>
          </Card>
        </Col>

        {/* التأهيل المهني */}
        <Col xs="12" md="4" className="mb-3">
          <Card className="h-100 shadow-sm border-0 bg-light">
            <CardHeader className="bg-info text-white text-center">
              <i className="fa fa-briefcase fa-2x mb-2"></i>
              <CardTitle tag="h5" className="mb-0 font-weight-bold">
                التأهيل المهني
              </CardTitle>
            </CardHeader>
            <CardBody className="text-right">
              <CardText className="text-secondary">
                تنظيم ورشات عمل وتدريبات حِرفية تهدف إلى تمكين المنخرطين من
                اكتساب مهن تساعدهم على الاستقلالية الاقتصادية.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
