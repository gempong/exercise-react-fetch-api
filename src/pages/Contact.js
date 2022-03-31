import React, { Fragment } from "react";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

function Contact() {
  return (
    <Fragment>
      <Title style={{ marginBottom: "30px" }}>Contact Page</Title>
      <Row gutter={20}>
        <Col span={6}></Col>
      </Row>
    </Fragment>
  );
}

export default Contact;
