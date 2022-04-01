import React, { Fragment } from "react";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

function Contact() {
  return (
    <Fragment>
      <Title style={{ marginBottom: "30px" }}>Order Drinks Now</Title>
      <a href="https://shopee.co.id/" target="_blank" rel="noreferrer">Click Here</a>
      <Row gutter={20}>
        <Col span={6}></Col>
      </Row>
    </Fragment>
  );
}

export default Contact;
