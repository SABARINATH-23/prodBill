import { NavLink } from "react-router-dom";
// import logo from '../Images/logo.png'
import '../css/Navbar.css'
const Navbar = ()=>{
    return(
        <div className="nav">        
        <div className="nav-left">
            {/* <img src={logo} alt="logo"/> */}
            <p>Comapny Name</p>
        </div>
        <div className="nav-right">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
        </div>
        </div>

    )
}

export default Navbar;