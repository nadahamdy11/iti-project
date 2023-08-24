import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import style from "../Styles/Signin.module.css";
const Profile = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState([]);
  useEffect(() => {
    loadItems();
  }, []);
  var totalPrice = 0;
  const loadItems = async () => {
    const result = await axios.get("http://localhost:5000/orderItem");
    setItems(result.data);
    result.data.map((prices) => {
      totalPrice += prices.qty * Number(prices.price);
    });
    setTotal(totalPrice.toFixed(2));
  };
  const deleteOrder = async (id) => {
    let isDelete = window.confirm(
      "Are you Sure? This Item willbe removed from your order!"
    );
    if (isDelete) {
      await axios.delete(`http://localhost:5000/orderItem/${id}`);
      loadItems();
    }
  };
  const incDec = async (a, b, c, d, e,x) => {
    if (c === "dec") {
      if (a === 1) {
        a = 1;
      } else {
        a -= 1;
      }
    } else {
      if (a === 20) {
        a = 20;
        alert("Quantity Cannot Exceed 20!");
        return;
      } else {
        a += 1;
      }
    }
    const order = { title: d, price: e, qty: a ,image:x};
    await axios.put(`http://localhost:5000/orderItem/${b}`, order);
    loadItems();
  };
  return (
    <div className="container">
      <div className="row">

        <div className="col-8">

          <table className="table  border-1 text-dark" style={{backgroundColor:"",
            margin:"15px",
            border:"2px solid gray",

        }}>
            <thead>
              <th>Product</th>
              <th>Title</th>
              <th className="m-2">quantity </th>
              <th  className="m-2">price</th>
              <th></th>
            </thead>
            {items.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <td>
                    <img src={item.image} className={style.imgtable} alt=""/>
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <button
                      className={style.incbutton}
                      onClick={() =>
                        incDec(item.qty, item.id, "dec", item.title, item.price, item.image)
                      }
                    >
                      -
                    </button>
                    <input type="text" className={style.qtybuton} value={item.qty} />
                    <button className={style.incbutton}
                      
                      onClick={() =>
                        incDec(item.qty, item.id, "inc", item.title, item.price,item.image)
                      }
                    >
                      +
                    </button>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      className="border-0 mx-2 mt-1"
                      style={{ height: "30px", backgroundColor:"white",marginBottom:"10px" }}
                      onClick={() => deleteOrder(item.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-x-octagon"
                        viewBox="0 0 16 16"
                        style={{ color: "red" }}
                      >
                        <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}

          </table>
        </div>
        <div className="col-3 " style={{backgroundColor:"#f1e5c5"
      ,marginLeft:"30px",
      width:"390px", height:"700px"
    
      }}>

        <form className={style.flexab} >

          <div className={style.card}>
            <h1 style={{ color: "rgb(31, 55, 82)" ,fontSize:"35px"}}>
              Customer Data
            </h1>
            <hr></hr>
            <div className="card-body" style={{}}>
              <div className="row">
        
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Full Name </label>
                    <input
                      className="form-control" type="text"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                        className="form-control"
                   type="email" ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Phone </label>
                    <input
                      className="form-control"  type="number"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Country</label>
                    <select
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
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Promo Code </label>
                    <input
                      className="form-control"  type="text"
                    ></input>
                  </div>
                </div>
              </div>
              <hr />
             <h5 style={{ color: "rgb(31, 55, 82)" ,fontSize:"18px"}}>Total Cost={total}$</h5>
             
             <button className={style.checkout}>
              CheckOut
             </button>
            </div>
          </div>
        </form>
      </div>

        </div>
      </div>

  );
};

export default Profile;
