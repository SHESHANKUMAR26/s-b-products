import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Nav } from "react-bootstrap";

import Bookings from "./Bookings";
import Home from "./Home";
import Programs from "./Programs";
import Schedules from "./Schedules";
import Trainers from "./Trainers";
const Dashboard = () => {
    const handleSignout = () => {
        localStorage.removeItem("loggedAdmin");
    }
    return (
        <div className="d-flex admin">

            {/* Side Nav Bar */}
            <div className="side-nav">
                <br /><br /><br /><br />
                <Nav defaultActiveKey="/admin/" className="flex-column">
                    <Link to="/admin" className="text">
                        <i className="fa fa-home"></i>
                        <span>Home</span>
                    </Link>
                    <Link to="/admin/programs" className="text">
                        <i className="fa fa-paper-plane"></i>
                        <span>Programs</span>
                    </Link>
                    <Link to="/admin/trainers" className="text">
                        <i className="fa fa-male" aria-hidden="true"></i>
                        <span>Trainers</span>
                    </Link>
                    <Link to="/admin/schedules" className="text">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span>Schedules</span>
                    </Link>
                    <Link to="/admin/bookings" className="text">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <span>Bookings</span>
                    </Link>
                    <Link to="/admin" className="text" onClick={handleSignout}>
                        <i className="fa fa-sign-out"></i>
                        <span>Sign out</span>
                    </Link>

                </Nav>
            </div>

            {/* Router */}
            <div className="main" style={{ paddingTop: "100px" }}>
                <Switch>
                    <Route exact path="/admin/" component={Home} />
                    <Route exact path="/admin/programs" component={Programs} />
                    <Route exact path="/admin/trainers" component={Trainers} />
                    <Route exact path="/admin/schedules" component={Schedules} />
                    <Route exact path="/admin/bookings" component={Bookings} />

                </Switch>
            </div>
        </div>

    );
}
export default Dashboard;