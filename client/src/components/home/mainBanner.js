import React from 'react';
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainBanner = () => {

    return (
        <div className="content1">
         <div className="right-div">
          <div className="blur-color">
           </div>
            </div>
             <div className="left-div">
              <div className="heading">
               <h1 className="mtitle"><img src="S&B LOGO.png"></img></h1>
                </div>
                 <div className="mheading">
                <p className="quotes">SELL & BUY <br></br><span class="no">PRODUCTS</span></p>
               </div>
               <Navbar>
               <div className="con1-nav">
                         <Link to="/">Home</Link>
                         <a href="#category">Category</a>
                         <Link to="/register">Register</Link>
                         <Link to="/login">Login</Link>
                         <a href="#aboutUs">AboutUs</a>
               </div>
               </Navbar>
        </div>
       </div>

    )
}

export default MainBanner;