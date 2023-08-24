import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import style from "../../Styles/Navbar.module.css";
export default function Navbar() {
  const [theme, setTheme] = useState(  localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);


  return (
    <div className={`App ${theme}`}>

    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        background:
          "linear-gradient(95deg, rgba(10,13,17,1) 0%, rgba(42,57,74,1) 63%)",
      }}
    >
      
                  


      <div className="container-fluid" >
        <Link className="navbar-brand" to="#">
          <img
            src="https://img.icons8.com/?size=512&id=81934&format=png"
            alt=""
            height="40px"
            width="40px"
          />{" "}
        </Link>
        <span className="text-light">
          <span
            style={{
              fontWeight: "bold",
              letterSpacing: "2px",
              fontSize: "22px",
              paddingLeft: "3px",
            }}
          >
            IKEA
          </span>
          <br />
          <span
            style={{ color: "orange", letterSpacing: "2px", fontSize: "14px" }}
          >
            Furniture
          </span>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto gap-5 me-5 ">
            <li className="nav-item">
              <Link className={style.link} aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={style.link} to="/shop">
                Furniture
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addProduct" className={style.link}>
                Add Furniture
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className={style.link}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Signin" className={style.link}>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactus" className={style.link}>
                Conact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className={style.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </Link>
            </li>
            <li className="nav-item" style={{border:".5px solid white"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16" onClick={toggleTheme}>
               <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
