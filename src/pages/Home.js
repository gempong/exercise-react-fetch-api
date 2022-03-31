import React, { Fragment } from "react";
import { Card, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
const { Title } = Typography;

function Home() {
  const [state, setState] = React.useState({ post: [] });
  React.useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b")
      .then((response) => response.json())
      .then((result) => {
        setState({ post: result.drinks });
      });
  }, []);

  return (
    <Fragment>
      <Title style={{ marginBottom: "30px" }}>List all Drinks</Title>
      <Row gutter={20}>
        {state.post.length > 0 &&
          state.post.map((i) => (
            <Col span={6}>
              <Link to={"/drink/" + i.idDrink}>
                <Card
                  hoverable
                  style={{ marginBottom: "20px" }}
                  cover={<img alt="example" src={i.strDrinkThumb} />}
                >
                  <Meta title={i.strDrink} description={i.strCategory} />
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </Fragment>
  );
}

export default Home;
