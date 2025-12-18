import "./Menu.scss";
import MenuLink from "./MenuLink";
// import { useState } from "react";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen ? "active" : "")} id="menu">
      <ul>
        <MenuLink section={"Intro"} setMenuOpen={setMenuOpen} />
        <MenuLink section={"Portfolio"} setMenuOpen={setMenuOpen} />
        <MenuLink section={"Works"} setMenuOpen={setMenuOpen} />
        <MenuLink section={"Testimonials"} setMenuOpen={setMenuOpen} />
        <MenuLink section={"Contact"} setMenuOpen={setMenuOpen} />
      </ul>
    </div>
  );
}
