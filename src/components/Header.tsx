import React from "react";
import { FloatingNav } from "./UIComponents";

const NAV_ITEMS = [
  { name: "Início", link: "/" },
  { name: "A Cervejaria", link: "/cervejaria" },
  { name: "Catálogo", link: "/catalogo" },
  { name: "Bebidas", link: "/bebidas" },
  { name: "Contato", link: "/contato" },
];

export const Header = () => {
  return (
    <FloatingNav 
      navItems={NAV_ITEMS} 
      logo="/kaf-branco.png" 
    />
  );
};

export default Header;
