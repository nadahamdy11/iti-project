import "./App";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ProductsContextProvider } from "./ContextAPIs/ProductsContext.jsx";
const Home = lazy(() => import("./Components/Home"));
const Footer = lazy(() => import("./Components/Shared/Footer"));
const Navbar = lazy(() => import("./Components/Shared/Navbar"));
const Signin = lazy(() => import("./Components/Users/Signin"));
const Login = lazy(() => import("./Components/Users/Login"));
const Profile = lazy(() => import("./Components/Cart"));
const Shop = lazy(() => import("./Components/CRUD/Shop"));
const Details = lazy(() => import("./Components/CRUD/Details"));
const EditProduct = lazy(() => import("./Components/CRUD/EditProduct"));
const AddProduct = lazy(() => import("./Components/CRUD/addProduct"));
const Contactus = lazy(() => import("./Components/Contactus.jsx"));
const Notfound = lazy(() => import("./Components/NotFound"));

function App() {
  
  return (
    <Fragment >

      <Suspense
        fallback={
          <div className="spinner-border text-center" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
      >
        <BrowserRouter>
          <Navbar />

          <ProductsContextProvider>
            <Routes>
              {["Login", "/"].map((path, index) => (
                <Route path={path} element={<Login />} key={index} />
              ))}
              <Route path="/Home" element={<Home />}></Route>
              <Route path="/signin" element={<Signin />}></Route>
              <Route path="/cart" element={<Profile />}></Route>
              <Route path="shop" element={<Shop />} />
              <Route path="shop/:id" element={<Details />} />
              <Route path="edit/:id" element={<EditProduct />} />
              <Route path="addProduct" element={<AddProduct />} />
              <Route path="contactus" element={<Contactus />} />
              <Route path="*" element={<Notfound/>} />


            </Routes>
            <Footer />
          </ProductsContextProvider>
        </BrowserRouter>
      </Suspense>
    </Fragment>
  );
}

export default App;
