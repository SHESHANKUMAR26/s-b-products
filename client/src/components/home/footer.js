import React from "react";
import {Link}from 'react-router-dom'

const Footer =()=>
{
    return(
        <div className="content4">
        <div className="con4-div"><br></br><br></br>
        <Link className="con4-h1" to="/register"><h1>REGISTER</h1></Link>&nbsp;to get started!
         
        </div>
          <p className="con4-op">Copyright ©2020 All rights reserved |
          <br></br>contact: +91 66666 66666</p>
    </div>
    )
}

export default Footer;