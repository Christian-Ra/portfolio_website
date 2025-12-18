import React from "react";

export default function MenuLink({ section, setMenuOpen }) {
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a href={`#${section.toLowerCase()}`}>{section}</a>
    </li>
  );
}
