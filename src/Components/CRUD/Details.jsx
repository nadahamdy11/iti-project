import React, { useContext, useEffect, useState } from "react";
import style from "../../Styles/details.module.css";
import "../../Styles/detailActive.module.css";
import { NavLink, useParams } from "react-router-dom";
import ProductContext from "../../ContextAPIs/ProductsContext";
import axios from "axios";

function Details() {
  let [products, setProducts] = useState([]);
  const id = useParams().id;
  let getProductById = () => {
    axios
      .get(`http://localhost:5000/products/${id} `)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProductById();
  }, []);
  return (
    <div className=" d-flex gap-3 my-4 mx-3">
      <NavLink className={style.imgs}>
        {products.images?.map((i, idx) => {
          return (
            <div className={style.img}>
              <img src={i} alt="img" key={idx} className=" img-fluid" />
            </div>
          );
        })}
      </NavLink>
      <div className={style.box}>
        <img src={products.thumbnail} alt="Product-img" />
      </div>
      <div className={style.box}>
        <span> / {products.title}</span>
        <h2 className=" my-4">{products.title}</h2>
        {products.discountPercentage > 0 ? (
          <p className={style.discountPercentage}>
            Discount:({products.discountPercentage}%)
          </p>
        ) : null}
        <p className={style.price}>
          $
          {(
            products.price -
            (products.price * products.discountPercentage) / 100
          ).toFixed(2)}
          {products.discountPercentage > 0 ? (
            <span className={style.discount}> ${products.price}</span>
          ) : null}
        </p>
        <p className=" text-black-50 fw-semibold">{products.description}</p>
        <hr />
        <h5>Stock: {products.stock > 0 ? products.stock : "Out Of Stock"}</h5>
        <p>Category: {products.category}</p>
        <p>Brand: {products.brand}</p>
      </div>
    </div>
  );
}

export default Details;
