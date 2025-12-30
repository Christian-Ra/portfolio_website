import "./Menu.scss";
import MenuLink from "./MenuLink";
// import { useState } from "react";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen ? "active" : "")} id="menu">
      <ul>
        <MenuLink
          section={"Intro"}
          setMenuOpen={setMenuOpen}
          title={"Who I am"}
        />
        <MenuLink
          section={"Portfolio"}
          setMenuOpen={setMenuOpen}
          title={"What I code"}
        />
        <MenuLink
          section={"Resume"}
          setMenuOpen={setMenuOpen}
          title={"How I've done it"}
        />
        <MenuLink
          section={"Profile"}
          setMenuOpen={setMenuOpen}
          title={"What else I do"}
        />
        <MenuLink
          section={"Contact"}
          setMenuOpen={setMenuOpen}
          title={"Where to reach me"}
        />
      </ul>
    </div>
  );
}
