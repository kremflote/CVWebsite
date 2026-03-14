import type { FC } from "react";
import { NavLink } from "react-router-dom";
import {
  headerContainer,
  iconMobile,
  logoLink,
  navContainer,
  navLinkActive,
  navLinkInactive,
  navRow,
  navRowItem,
  textDesktop,
} from "../../styles/styles";

const Header: FC = () => {
  return (
    <header className={headerContainer}>
      <nav className={navContainer}>
        <NavLink to="/" className={logoLink}>
          Marius Kristensen
        </NavLink>

        <ul className={navRow}>
          <li className={navRowItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${navLinkActive}` : navLinkInactive
              }
            >
              <i className={`fa-user-shield ${iconMobile}`}></i>
              <span className={textDesktop}>Hjem</span>
            </NavLink>
          </li>

          <li className={navRowItem}>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? `${navLinkActive}` : navLinkInactive
              }
            >
              <i className={`fa-user-plus ${iconMobile}`}></i>
              <span className={textDesktop}>Portfolio</span>
            </NavLink>
          </li>

          <li className={navRowItem}>
            <NavLink
              to="/cv"
              className={({ isActive }) =>
                isActive ? `${navLinkActive}` : navLinkInactive
              }
            >
              <i className={`fa-coins ${iconMobile}`}></i>
              <span className={textDesktop}>CV</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
