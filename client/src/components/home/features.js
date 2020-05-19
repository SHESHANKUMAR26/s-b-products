import React from "react";


const Features = () =>
{
    return(
    <div id="features"  className="content2">
        <div className="con-div1">
         <img src="mobile logo.png" className="logo-truck" alt="truck"/>
          <h1 className="s-head">MOBILE PHONES</h1>
           <p className="s-con">We provide large number of varients in Truck.You choose the truck what you need. We provide the image for the selected Truck.</p>
            </div>
             <div className="con-div2">
              <img src="car logo.png" className="logo-submittion" alt="submittion"/>
               <h1 className="s-head">CARS</h1>
                <p className="s-con">In our website, directly the Load providing company gives the Quote Submission. Their is no Brokers and Middle man.</p>
                 </div>
                 <div className="con-div3">
                <img src="furniture logo.png" className="logo-placement" alt="Placement"/>
               <h1 className="s-head">FURNITURES</h1>
              <p className="s-con">If your Load was confirmed by the Truck owner, we update the assigned vehicle details and Pickup timing in your Dashboard</p>
             </div>
            <div className="con-div4">
           <img src="bike logo.png" className="logo-tracking" alt="tracking"/>
          <h1 className="s-head">MOTORBIKES</h1>
         <p className="s-con">We also tracking the Status of the Load and Delivery Details. After Load Delivered We Update the Details in the Dashboard.</p>
        </div>
       </div>
    
    )
}

export default Features;