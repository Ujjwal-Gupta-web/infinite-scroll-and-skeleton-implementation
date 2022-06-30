import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  let location=useLocation().pathname;

  if(location==="/"){
    document.title="Home | AppName";
  }
  else if(location==="/login"){
    document.title="Login | AppName";
  }

  let navigate=useNavigate();
  document.body.style.background="#eaeded";
  
  return (
    <>
    <div className='p-3 text-center d-flex align-items-center justify-content-between' style={{background:localStorage.getItem("user")?"white":"#e9e9e9"}}>
        <div><Link className='text-dark text-decoration-none' to="/"><b>List of Users</b></Link></div>
        <div className='d-flex align-items-center justify-content-between'>
        {
        localStorage.getItem("user")
        ?
        <div className='mx-2 text-danger' style={{cursor:"pointer"}} onClick={()=>{localStorage.removeItem("user"); navigate("/login");}}>Logout</div>
        :
        <div style={{cursor:"pointer",fontWeight:"500"}}><Link className='text-dark text-decoration-none' to="/login">Login</Link></div>
        }
          
        </div>
    </div>
    </>
  )
}

export default Navbar