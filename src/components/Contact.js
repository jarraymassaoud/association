import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Card,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      message: "",
      submitted: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`شكراً ${this.state.firstname}! تم إرسال رسالتك بنجاح.`);

    // إعادة تعيين النموذج بعد الإرسال
    this.setState({
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      message: "",
      submitted: true,
    });
  }

  render() {
    return (
      <div className="container my-4">
        {/* شريط المسار (Breadcrumb) */}
        <Row>
          <Col className="col-12">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">الرئيسية</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>اتصل بنا</BreadcrumbItem>
            </Breadcrumb>
            <h3>اتصل بنا </h3>
            <hr />
          </Col>
        </Row>

        {/* معلومات الاتصال والخريطة */}
        <Row className="row-content mb-4">
          <Col xs="12" sm="6" className="mb-3">
            <Card className="h-100 shadow-sm">
              <CardBody>
                <h5 className="card-title text-primary">
                  <i className="fa fa-map-marker mr-2"></i> مقر الجمعية
                </h5>
                <address className="mt-3">
                  الجمعية التونسية لمساعدة الصم بمدنين (ATAS Medenine)[cite: 5,
                  9]
                  <br />
                  نهج الصيادين مدنين 4100 <br />
                  تونس
                  <br />
                  <br />
                  <i className="fa fa-phone fa-lg mr-2"></i>الهاتف: 439 642 75
                  <br />
                  <i className="fa fa-envelope fa-lg mr-2"></i>البريد:
                  atasmedenine2020@gmail.com
                </address>
                <div className="btn-group mt-2" role="group">
                  <a
                    role="button"
                    className="btn btn-primary"
                    href="tel:+21675000000"
                  >
                    <i className="fa fa-phone"></i> اتصال
                  </a>
                  <a
                    role="button"
                    className="btn btn-success"
                    href="mailto:contact@atas-medenine.tn"
                  >
                    <i className="fa fa-envelope-o"></i> إرسال بريد
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>

          {/* الخريطة */}
          <Col xs="12" sm="6" className="mb-3">
            <Card className="h-100 shadow-sm">
              <CardBody className="p-0">
                <iframe
                  title="موقع الجمعية"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106253.30825368422!2d10.428416450000001!3d33.35413345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a02b6628ef45b3%3A0x86bb60f08e42f618!2sMedenine!5e0!3m2!1sen!2stn!4v1620000000000!5m2!1sen!2stn"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "250px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* نموذج الإرسال (Form) */}
        <Row className="row-content">
          <Col xs="12">
            <h4 className="mb-4">أرسل لنا ملاحظة أو استفسار</h4>
          </Col>
          <Col xs="12" md="10">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstname" md={3}>
                  الاسم الأول
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="الاسم الأول"
                    value={this.state.firstname}
                    onChange={this.handleInputChange}
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="lastname" md={3}>
                  اللقب
                </Label>
                <Col md={9}>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="اللقب"
                    value={this.state.lastname}
                    onChange={this.handleInputChange}
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="telnum" md={3}>
                  رقم الهاتف
                </Label>
                <Col md={9}>
                  <Input
                    type="tel"
                    id="telnum"
                    name="telnum"
                    placeholder="رقم الهاتف"
                    value={this.state.telnum}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="email" md={3}>
                  البريد الإلكتروني
                </Label>
                <Col md={9}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@email.com"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="message" md={3}>
                  الرسالة
                </Label>
                <Col md={9}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="اكتب رسالتك هنا..."
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    required
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 9, offset: 3 }}>
                  <Button type="submit" color="primary">
                    <i className="fa fa-paper-plane mr-1"></i> إرسال الرسالة
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
