import React from "react";

export default function MenuLink({ section, setMenuOpen, title }) {
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a href={`#${section.toLowerCase()}`}>{title}</a>
    </li>
  );
}
