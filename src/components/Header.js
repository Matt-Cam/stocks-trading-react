import React from 'react';
import { Link, withRouter } from "react-router-dom";

const Header = () => (
  <header class="main-header">
    <nav>
        <ul class="menu">
            <li class="menu__list-item">
              <Link to="/">Home</Link>
            </li>
            <li class="menu__list-item">
              <Link to="/assets">Assets</Link>
            </li>
            <li class="menu__list-item">
              <Link to="/details">Details</Link>
            </li>
        </ul>
    </nav>
  </header>
)

export default withRouter(Header);