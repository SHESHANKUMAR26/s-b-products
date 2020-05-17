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
               <h1 className="mtitle">TRUCKOPS</h1>
                </div>
                 <div className="mheading">
                <p className="quotes">TRUCK DELIVERED.<br></br><span class="no">NO EXECUSE.</span></p>
               </div>
               <Navbar>
               <div className="con1-nav">
                         <Link to="/">Home</Link>
                         <a href="#features">Features</a>
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