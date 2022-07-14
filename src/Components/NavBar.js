import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav-items">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <li>3. Data Set Filter</li>
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <li>4. Header Analysis</li>
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <li>5. Body Analysis</li>
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <li>6. Verification</li>
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <li>7. Message Flow (BETA)</li>
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <li>8. Export (BETA)</li>
        </NavLink>
      </ul>
    </nav>
  );
}
export default NavBar;
