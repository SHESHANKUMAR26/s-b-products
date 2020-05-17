import React, { useState } from "react";
import api from "../../config/api";
const Login = ({ setAdmin }) => {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const onLoginSubmit = (event) => {
        event.preventDefault();
        let content = { loginId, password };
        api.post("/admin/login", content).then((res) => {
            let loggedAdmin = JSON.stringify(res.data);
            localStorage.setItem("loggedAdmin", loggedAdmin);
            setAdmin(loggedAdmin);
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className="container" style={{ minHeight: "60vh" }}>

            <form onSubmit={onLoginSubmit} style={{ margin: "250px 100px" }}>
                <h3 style={{ color: "#0069D9", marginBottom: "25px", fontSize: "large" }}>Admin Login</h3>

                <div className="form-group">
                    <label htmlFor="name">User ID</label>
                    <input
                        type="text"
                        id="loginId"
                        className="form-control"
                        placeholder="User ID"
                        onChange={({ target }) => setLoginId(target.value)}
                        value={loginId}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="password"
                        onChange={({ target }) => setPassword(target.value)}
                        value={password}
                        required
                    />
                </div>
                <input type="submit" value="Login" className="btn btn-primary" />
            </form>

        </div>
    )
}
export default Login;