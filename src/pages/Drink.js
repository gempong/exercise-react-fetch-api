import React, { Fragment } from "react";
import { Typography, Image, Col, Row } from "antd";
import { useParams } from "react-router-dom";

const { Title } = Typography;

function Drink(props) {
  const [state, setState] = React.useState({ post: {} });
  const { id } = useParams();
  React.useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setState({ post: result.drinks[0] });
      });
  }, []);

  return (
    <Fragment>
      <Row gutter={30}>
        <Col span={10}>
          <Image
            width={"100%"}
            src={!!state.post && state.post.strDrinkThumb}
          />
        </Col>
        <Col span={10}>
          <Title style={{ marginBottom: "30px" }}>
            {!!state.post && state.post.strDrink}
          </Title>
          <Title level={4}>
            Ingredients
          </Title>
          <ul style={{ marginBottom: "30px" }}>
            {!!state.post.strIngredient1 && <li>{state.post.strIngredient1}</li>}
            {!!state.post.strIngredient2 && <li>{state.post.strIngredient2}</li>}
            {!!state.post.strIngredient3 && <li>{state.post.strIngredient3}</li>}
            {!!state.post.strIngredient4 && <li>{state.post.strIngredient4}</li>}
            {!!state.post.strIngredient5 && <li>{state.post.strIngredient5}</li>}
            {!!state.post.strIngredient6 && <li>{state.post.strIngredient6}</li>}
            {!!state.post.strIngredient7 && <li>{state.post.strIngredient7}</li>}
            {!!state.post.strIngredient8 && <li>{state.post.strIngredient8}</li>}
            {!!state.post.strIngredient9 && <li>{state.post.strIngredient9}</li>}
            {!!state.post.strIngredient10 && <li>{state.post.strIngredient10}</li>}
            {!!state.post.strIngredient11 && <li>{state.post.strIngredient11}</li>}
            {!!state.post.strIngredient12 && <li>{state.post.strIngredient12}</li>}
            {!!state.post.strIngredient13 && <li>{state.post.strIngredient13}</li>}
            {!!state.post.strIngredient14 && <li>{state.post.strIngredient14}</li>}
            {!!state.post.strIngredient15 && <li>{state.post.strIngredient15}</li>}
          </ul>
          <Title level={4}>
            Glass
          </Title>
          <p style={{ marginBottom: "30px" }}>{state.post.strGlass}</p>
          <Title level={4}>
          Instructions
          </Title>
          <p style={{ marginBottom: "30px" }}>{state.post.strInstructions}</p>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Drink;
