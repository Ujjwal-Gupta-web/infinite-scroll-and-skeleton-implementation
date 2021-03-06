import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

const Login = () => {

  const navigate = useNavigate();

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [])

  document.body.style.backgroundColor = "#595dcff2";

  const handle_login = () => {
    let obj = {
      username,
      password
    }
    if (username === "" || password === "") {
      toast.error("Please fill all the fields");
    }
    else {
      localStorage.setItem("user", "loggedin");
      toast.success("Login Success");
      navigate("/");
    }
  }

  return (
    <>
      {/* <div className='p-3 text-center' style={{background:"#e9e9e9"}}>
        <b>List of Users</b>
    </div> */}
      <div className='container border border-lg p-4 mt-5' style={{ maxWidth: "300px", background: "#e9e9e9" }}>
        <h3 className='mb-3'>Login</h3>
        <div className='text-muted my-1 fs-7'>Not registered ? <Link to="/signup">Register here</Link></div>
        <div class="mb-3">
          <label for="login_username" class="form-label">Username</label>
          <input type="username" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} id="login_username" />
        </div>
        <div class="mb-3">
          <label for="login_password" class="form-label">Password</label>
          <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="login_password" />
        </div>
        <div className='text-muted my-2 fs-7'>Forgot Password ? <span>Click here</span></div>
        <button onClick={handle_login} class="btn btn-secondary">Login</button>
      </div>
    </>
  )
}

export default Login
