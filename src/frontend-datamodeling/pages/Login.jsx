import React, { useMemo, useState } from "react";
import { requestApi } from "../configuration/fetchingApis";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../Projects/theme.context";

const Login = () => {
  const [payload, setPayload] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState([])
  const { handleLoading } = useTheme()
  const navigate = useNavigate()

  useMemo(() => {
    console.log("loginData", loginData)
  }, [loginData])

  function handleChange(e, name) {
    setPayload((prev) => {
      return {
        ...prev,
        [name]: e.target.value,
      };
    });
  }

  const loginUser = requestApi("POST", "users/login", payload, "User logged in successfully", navigate, handleLoading);


  function handleSubmit(e) {
    e.preventDefault()
    loginUser(setLoginData)
  }



  return (
    <form onSubmit={handleSubmit}>
      <main className="login__main">
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Enter your username"
          value={payload.username}
          required
          onChange={(e) => handleChange(e, "username")}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={payload.email}
          required
          onChange={(e) => handleChange(e, "email")}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={payload.password}
          required
          onChange={(e) => handleChange(e, "password")}
        />
        <button className="login__btn">Submit</button>
      </main>
    </form>
  );
};

export default Login;
