import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import style from "../../Styles/Signin.module.css";
import image from "../../Images/WhatsApp Image 2023-08-17 at 1.03.18 AM.jpeg";

const Signin = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [country, countrychange] = useState("india");
  const [address, addresschange] = useState("");
  const [gender, genderchange] = useState("female");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (id === null || id === "") {
      isproceed = false;
      errormessage += " Username";
    }
    if (name === null || name === "") {
      isproceed = false;
      errormessage += " Fullname";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid email");
      }
    }
    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = {
      id,
      name,
      password,
      email,
      phone,
      country,
      address,
      gender,
    };
    if (IsValidate()) {
      //console.log(regobj);
      fetch("http://localhost:5000/User", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Registered successfully.");
          navigate("/Login");
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    }
  };
  return (
    <div>
      <div className="offset-lg-2 mt-5 ">
        <form className={style.flexab} onSubmit={handlesubmit}>
          <img src={image} className={style.image} alt="" />

          <div className={style.card}>
            <h1 className=" m-4  " style={{ color: "#ae7d34" , textAlign:"center" }}>
              Sign up
            </h1>

            <div className="card-body" class={style.bodyforcard}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      value={id}
                      onChange={(e) => idchange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      value={password}
                      onChange={(e) => passwordchange(e.target.value)}
                      type="password"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Full Name </label>
                    <input
                      value={name}
                      onChange={(e) => namechange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      value={email}
                      onChange={(e) => emailchange(e.target.value)}
                      className="form-control"
                    ></input>
                    <ToastContainer />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Phone </label>
                    <input
                      value={phone}
                      onChange={(e) => phonechange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Country</label>
                    <ToastContainer />
                    <select
                      value={country}
                      onChange={(e) => countrychange(e.target.value)}
                      className="form-control"
                    >
                      <option value="india">Egypt</option>
                      <option value="usa">USA</option>
                      <option value="singapore">dubi</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      value={address}
                      onChange={(e) => addresschange(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6 m-3">
                  <div className="form-group">
                    <label>Gender</label>
                    <br></br>
                    <input
                      type="radio"
                      checked={gender === "male"}
                      onChange={(e) => genderchange(e.target.value)}
                      name="gender"
                      value="male"
                      className="app-check m-2"
                    ></input>
                    <label>Male</label>
                    <input
                      type="radio"
                      checked={gender === "female"}
                      onChange={(e) => genderchange(e.target.value)}
                      name="gender"
                      value="female"
                      className="app-check m-2"
                    ></input>
                    <label>Female</label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn m-2"
                style={{
                  border: "2px solid #354c5f",
                  width: "300px",
                  hight: "70px",
                  backgroundColor: "#354c5f",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Create an account
              </button>
              <br />
              <label>Already a member?</label>
              <Link
                to={"/Login"}
                style={{
                  color: "orang",
                  fontSize: "20px",
                  textDecorationLine: "none",
                }}
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
