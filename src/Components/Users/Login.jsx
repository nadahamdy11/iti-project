import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import main from "../../Styles/Signin.module.css";
import image from "../../Images/WhatsApp Image 2023-08-17 at 1.03.18 AM.jpeg";
const Login = () => {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      ///implentation
      // console.log('proceed');
      fetch("http://localhost:5000/User/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          //console.log(resp)
          if (Object.keys(resp).length === 0) {
            toast.error("Please Enter valid username");
          } else {
            if (resp.password === password) {
              toast.success("Success");
              sessionStorage.setItem("username", username);
              sessionStorage.setItem("userrole", resp.role);
              usenavigate("/Home");
            } else {
              toast.error("Please Enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };
  return (
    <div className="row">
      <div className={main.flexy}>
        <img src={image} className={main.image} alt="" />

        <form onSubmit={ProceedLogin} >
          <div className={main.card}>
            <h1 style={{ color: "#ae7d34" }}> Log in</h1>

            <div className="card-body">
              <div className="form-group">
                <label>
                  User Name <span className="errmsg text-danger">*</span>
                </label>
                <ToastContainer />
                <input
                  value={username}
                  onChange={(e) => usernameupdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg text-danger">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => passwordupdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="card-footer m-2">
              <button type="submit" className="btn" style={{ backgroundColor: "#354c5f", color: "white" }}
>
                Login
              </button>
              <Link
                className="btn ms-2"
                to={"/Signin"}
                style={{ backgroundColor: "#ae7d34", color: "white" }}
              >
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
