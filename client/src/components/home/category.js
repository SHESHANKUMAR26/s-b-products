import React from "react";



const Category = () =>
{
    return(
    <div id="category"  className="content2">
        <div className="con-div1">
         <img src="mobile logo.png" className="logo-truck" alt="MOBILES"/>
          <h1 className="s-head">MOBILE PHONES</h1>
           <p className="s-con"></p>
            </div>
             <div className="con-div2">
              <img src="car logo.png" className="logo-submittion" alt="CARS"/>
               <h1 className="s-head">CARS</h1>
                <p className="s-con"></p>
                 </div>
                 <div className="con-div3">
                <img src="furniture logo.png" className="logo-placement" alt="FURNITURES"/>
               <h1 className="s-head">FURNITURES</h1>
              <p className="s-con"></p>
             </div>
            <div className="con-div4">
           <img src="bike logo.png" className="logo-tracking" alt="BIKES"/>
          <h1 className="s-head">MOTOR<br></br>BIKES</h1>
         <p className="s-con"></p>
        </div>
       </div>
    
    )
}

export default Category;