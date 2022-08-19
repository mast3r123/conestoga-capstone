import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import Navbar from "../../components/navbar/Navbar";
import { axiosInstance } from "../../config";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(credentials);
    if (credentials.username == undefined || credentials.username.length < 8) {
      alert("Username must be at least 8 chars long");
      return;
    }

    if (credentials.password == undefined || credentials.password.length < 8) {
      alert("Password must be at least 8 chars long");
      return;
    }

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login">
        <div className="lContainer">
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button disabled={loading} onClick={handleClick} className="lButton">
            Login
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </div>
  );
};

export default Login;
