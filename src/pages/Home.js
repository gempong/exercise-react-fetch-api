import React, { Fragment } from "react";
import { Input, Card, Col, Row, Typography, Empty } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Title } = Typography;

function Home() {
  const [state, setState] = React.useState({ post: [], notFound: false });

  function search(event) {
    const inputValue = event.target.value;
    try {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
      )
        .then((response) => response.json())
        .then((result) => {
          if (inputValue !== "") {
            setState({ notFound: false });
            setState({ post: result.drinks });

            if (result.drinks === null) {
              setState({ notFound: true });
            }
          } else {
            setState({ notFound: false });
            getAllDrinks();
          }
        });
    } catch (error) {
      console.log(error.response);
    }
  }

  function getAllDrinks() {
    try {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
        .then((response) => response.json())
        .then((result) => {
          setState({ post: result.drinks });
        });
    } catch (error) {
      console.log(error.response);
    }
  }

  React.useEffect(() => {
    getAllDrinks();
  }, []);

  return (
    <Fragment>
      <Row
        gutter={20}
        style={{
          marginBottom: "30px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Col>
          <Title style={{ marginBottom: "0" }}>All Drinks</Title>
        </Col>
        <Col>
          <Input
            onChange={search}
            size="large"
            placeholder="Search Drinks"
            prefix={<SearchOutlined />}
          />
        </Col>
      </Row>
      <Row gutter={20}>
        {state.notFound === true && (
          <Col span={24}>
            <Empty />
          </Col>
        )}
        {!!state.post &&
          state.post.map((i) => (
            <Col span={6} key={i.idDrink}>
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
