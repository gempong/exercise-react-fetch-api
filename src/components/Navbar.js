import React, { useState } from "react";
import { Menu } from "antd";
import { HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";

function Navbar() {
  const [state, setState] = useState({ current: "home" });

  const handleClick = (e) => {
    console.log("click ", e);
    setState({ current: e.key });
  };

  const { current } = state;

  return (
    <div className="navbar-wrapper">
      <h2>Logo</h2>
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
        <Menu.Item key="cat1" icon={<HomeOutlined />}>
          <Link to={"/"}>Category 1</Link>
        </Menu.Item>
        <Menu.Item key="cat2" icon={<HomeOutlined />}>
          <Link to={"/"}>Category 2</Link>
        </Menu.Item>
        <Menu.Item key="cat3" icon={<HomeOutlined />}>
          <Link to={"/"}>Category 3</Link>
        </Menu.Item>
        <Menu.Item key="contact" icon={<PhoneOutlined />}>
          <Link to={"/contact"}>Contact</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default withRouter(Navbar);
