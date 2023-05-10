import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1 className="web-name">Math Fans</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="Links">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/calculator" className="Links">
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to="/quotes" className="Links">
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
