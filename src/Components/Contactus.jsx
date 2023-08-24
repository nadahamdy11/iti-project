import React, { Component } from 'react'
import style from "../Styles/Contact.module.css"
export default class Contactus extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className="row" >
          <div className='col-lg-5 col-10'>
            <form class="p-5">
              <h1>Contact Us</h1>
              <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" style={{ backgroundColor: "#e6ebeb", width: "80%", height: "50px", borderRadius: "40px" }} />
              </div>

              <div class="mb-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" style={{ backgroundColor: "#e6ebeb", width: "80%", height: "50px", borderRadius: "40px" }} />
              </div>

              <div class="mb-3">

                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" column="5" placeholder="Message" style={{ backgroundColor: "#e6ebeb", width: "80%", height: "100px", borderRadius: "20px" }} ></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="btn " style={{
                  backgroundColor: "rgb(76, 56, 164)",
                  width: "200px",
                  height: "40px",
                  color: "white",
                  borderRadius: "50px",
                  fontweight: "bold"
                }}>Send Message</button>
              </div>
            </form>
          </div>
          <div className="col-lg-5 col-10" >
            <img src='https://img.freepik.com/free-vector/matchmaking-website-idea-social-network-geolocation-search-user-account-personal-profile-internet-surfing-online-dating-service-vector-isolated-concept-metaphor-illustration_335657-2215.jpg?t=st=1692788397~exp=1692788997~hmac=3cbe3b9eb5d0f7e82b9a2099f0fb5eb2713dae6f6f02170b562bc027d7b46f49' width="200px" height="500px" />
          </div>
        </div>


        
      </div>

    )
  }
}

