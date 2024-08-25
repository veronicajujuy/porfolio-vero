import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Proyectos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
