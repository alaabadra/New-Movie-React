import React from "react";
import "./style.css";
const Header = ({ changeSearchIn, submitMovie })=>(
    <section className="header">
    <div className="header--main">
      <form action="/search" onSubmit={submitMovie}>
        <input
          className="header-input"
          onChange={changeSearchIn}
          type="text"
          placeholder="Search"
        />
      </form>
    </div>
  </section>
)
export  default Header;


