import React from "react";
import type { LinksFunction } from "@remix-run/node";
import headerStyle from "~/styles/header.css";
import logoImage from "../../public/assets/logo.png";
import { navMainMenu, navSecondaryMenu } from "~/constant";
import { Form, Link, useLocation } from "@remix-run/react";
import { Icons } from ".";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: headerStyle,
  },
];

const Header: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo-image">
          <img src={logoImage} alt="logo" width={32} height={32} />
        </div>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list" role="list">
          {navMainMenu.map((navItem) => {
            return (
              <li className="header__nav-item" key={React.useId()}>
                {pathname === navItem.url ? (
                  <span className="header__nav-link-active header__nav-link">{navItem.name}</span>
                ) : (
                  <Link className="header__nav-link" to={navItem.url}>
                    {navItem.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="header__links">
      <Form  method="get" className="header__form">
        <input className="header__form-field"  type="text" placeholder="Search in phones..."/>  
        <Icons type="search" />
      </Form>
        <ul className="header__links-list" role="list">
          {navSecondaryMenu.map((navItem) => {
            return (
              <li
                className={`header__links-item header__links-item-${navItem.type}`}
                key={React.useId()}
              >
                <Link className="header__links-link" to={navItem.url}>
                  <Icons type={navItem.type} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
