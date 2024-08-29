import React, { useRef,useState } from 'react' 
import './Navbar.css'
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import nav_dropdown from '../Assets/nav_dropdown.png'
const Navbar = () => {
  const [menu,setMenu] = useState("Home")
  const menuRef = useRef();
  const dropdown_toggle = (e)=>{
  menuRef.current.classList.toggle('nav-menu-visible');
  e.target.classList.toggle('open');

  }
  return (
    <div className="navbar">
      <div className="menu-icon" onclick="toggleSidebar()">
            &#9776;
        </div>
        <div className="logo">
            <img src={logo} alt="Logo" width="50" height="50"/>
        </div>
        
        <ul className="navbar-links">

            <li onClick={()=>setMenu("Home")}><Link class='link'  to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("Services")} ><Link class='link' to='/Services'>Services</Link>{menu==="Services"?<hr/>:<></>}</li>
            <li  onClick={()=>setMenu("Review")}><Link class='link' to='/Reviews'>Review</Link>{menu==="Review"?<hr/>:<></>}</li>
            <li  onClick={()=>setMenu("Profile")} ><Link class='link'to='/Profile'>Profile</Link>{menu==="Profile"?<hr/>:<></>}</li>
            
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem('auth-token')
          ?<button class="btn btn-primary" onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} >LogOut </button>
          : 
        <Link to='/Login'><button class="btn btn-primary">Login</button></Link>}
        </div>
    </div>
  
  )
}

export default Navbar;