import React from "react";

import Logo from "./Logo";
import DashBoard from "./DashBoard";
import Product from "./Products";
import Login from "./Login";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        <li>
          <Logo />
        </li>
        <li>
          <DashBoard />
        </li>
        <li>
          <Product />
        </li>
        <li style={{ float: "right" }}>
          <a class="active" href="#about">
            <Login />
          </a>
        </li>
      </ul>
    );
  }
}

export default Header;
