import React from "react";
import { Link } from "react-router-dom";

function NavItem({ label, to, className = "" }) {
  return (
    <Link className={`${className}`} to={to}>
      {label}
    </Link>
  );
}

export default NavItem;
