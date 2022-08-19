import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";
import Navbar from "../../components/navbar/Navbar";
import { axiosInstance } from "../../config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!validateEmail(credentials.email)) {
      alert("Invalid Email");
    }

    if (credentials.username.length < 8) {
      alert("Username must be at least 8 chars long");
    }

    if (credentials.password.length < 8) {
      alert("Password must be at least 8 chars long");
    }

    if (!error) {
      try {
        const res = await axiosInstance.post("/auth/register", credentials);
        dispatch({ type: "REGISTRATION_SUCCESS", payload: res.data.details });
        alert("Successfully registered");
        navigate("/");
      } catch (err) {
        dispatch({ type: "REGISTRATION_FAILURE", payload: err.response.data });
      }
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
            type="text"
            placeholder="email"
            id="email"
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
            Register
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </div>
  );
};

export default Register;
