// import React from "react";

// export default function Navbar() {
//     return(
//         <div>
//             <div>
//             <img src={logo} alt='logo' width={100} height={100}/>
//                 <a class="btn btn-primary stretched-link" href="#home">Home</a>
//                 <a href="#nosotros">Nosotros</a>
//                 <a href="#menu">Menus</a>
//                 <a href="#franquicias">Franquicias</a>
//                 <a href="#sucursales">Sucursales</a>
//                 <a href="#contacto">Contacto</a>
//             </div>
//         </div>
//     )
// };
import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/urb.jpg'
export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container ml-auto">
      <img src={logo} alt='logo' width={100} height={100}/>
        <Link className="navbar-brand" to='/'>
          Note App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <ul className="navbar-nav  ">
            <li className="nav-item">
              <Link className="nav-link" to='/'>Note</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to='/create'>Create Note</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to='/user'>Create user</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

