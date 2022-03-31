import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  PhoneOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";

function Navbar() {
  const [state, setState] = useState({ current: "home" });

  const handleClick = (e) => {
    setState({ current: e.key });
  };

  const { current } = state;

  return (
    <div className="navbar-wrapper">
      <Link to={"/"} style={{ width: "-webkit-fill-available" }}>
        <h2>The Cocktail</h2>
      </Link>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        theme="dark"
        mode="horizontal"
        style={{ justifyContent: "flex-end", width: "100%" }}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item key="cat1" icon={<AppstoreOutlined />}>
          <Link to={"/category/Cocktail"}>Cocktail</Link>
        </Menu.Item>
        <Menu.Item key="cat2" icon={<AppstoreOutlined />}>
          <Link to={"/category/Ordinary Drink"}>Ordinary Drink</Link>
        </Menu.Item>
        <Menu.Item key="cat3" icon={<AppstoreOutlined />}>
          <Link to={"/category/Beer"}>Beer</Link>
        </Menu.Item>
        <Menu.Item key="contact" icon={<PhoneOutlined />}>
          <Link to={"/contact"}>Order Now</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default withRouter(Navbar);
