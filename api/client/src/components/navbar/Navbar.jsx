import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
    window.location.reload(false);
  };

  const handleRegister = () => {
    navigate("/register");
    window.location.reload(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(false);
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? (
          <div className="navItems">
            <button className="navButton">{user.username}</button>
            <button onClick={handleLogout} className="navButton">
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button onClick={handleRegister} className="navButton">
              Register
            </button>
            <button onClick={handleClick} className="navButton">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
