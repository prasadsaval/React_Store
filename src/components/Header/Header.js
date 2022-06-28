import React, { useContext } from "react";
import { StateContext } from "../../context/GlobalState";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const { totalItems, favoriteItems } = useContext(StateContext);

  return (
    <section className="navbar">
      <nav>
        <div className="logo">
          <Link to="/">TeeRex Store</Link>
        </div>
        <ul className="nav-items">
          <li>
            <Link to="/">Store</Link>
          </li>
        </ul>
        <ul className="nav-icons">
          <li>
            <Link to="/cart">
              <i className="ri-shopping-basket-2-line"></i>
              <span className="item-count">{totalItems}</span>
            </Link>
          </li>
        </ul>
        {/* <Search /> */}
      </nav>
    </section>
  );
}

export default Header;
