import { Link, Outlet, NavLink } from "react-router-dom";

const Header = () => {
  const isActiveRout = ({ isActive }) => {
    return isActive ? "nav__item active-route" : "nav__item";
  };
  return (
    <>
      <header>
        <nav className="nav">
          <NavLink to="/" className={isActiveRout}>
            Home
          </NavLink>
          <NavLink to="/posts" className={isActiveRout}>
            Blog
          </NavLink>
          <NavLink to="/about" className={isActiveRout}>
            About
          </NavLink>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>Test footer</footer>
    </>
  );
};

export default Header;
