import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div>
          <strong> Veronica Valdez</strong> Porfolio
        </div>
        <div className="navbar-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Proyectos</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
