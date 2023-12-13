import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";
const token = localStorage.getItem("token");
// const name=localStorage.getItem("name")
// const email=localStorage.getItem("email")
function LoginButton() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeme = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handle = (e) => {
    e.preventDefault();
    axios
      .post("https://mern-backend-o0hb.onrender.com/api/login", user, {
        headers: { authorization: `Bearer${token}` },
      })
      .then((res) => {
        console.log(res);
        alert(res.data.msg);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("email", res.data.email);
        console.log(res.data.name);
        console.log(res.data.email);
        navigate("/");
      });

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login">
      <div className="under_div_login">
        <h3 className="create_accc">Log in to your Udemy account</h3>
        <form>
          <label htmlFor="emaillogin" className="emaillogin"></label>
          <input
            type="email"
            className="emailloginid"
            name="email"
            id="emaillogin"
            placeholder="enter your email"
            value={user.email}
            onChange={changeme}
          />
          <br />
          <br />
          <label htmlFor="passwordlogin" className="passwordlogin"></label>
          <input
            type="password"
            id="passwordlogin"
            name="password"
            placeholder="enter your password"
            value={user.password}
            onChange={changeme}
            className="passwordinput"
          />
          <br />
          <br />

          <button onClick={handle} className="loginbtn_main">
            Login
          </button>
          <br />

          <NavLink to="/register">
            Don't have an account? Sign up Log in with your organization
          </NavLink>
        </form>
      </div>
    </div>
  );
}
export default LoginButton;
