import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

export const NavBar = () => {

  return (
 
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">

            <FontAwesomeIcon 
              icon={faHouse}
              className="ms-1"
              size="lg"
            />
            <span className="ms-2 h5">Inicio</span>
          </a>

          <div className={"navbar-collapse offcanvas-collapse"}>
          <div className="navbar-nav me-auto mb-lg-0">

              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <li className="nav-item">
                    <Link className="nav-link" to="/productos">Todos los productos</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/items/peluche">Peluches</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/items/toy">Toys</Link>
                  </li>
                </Dropdown.Menu>
              </Dropdown>

            </div>

            <CartWidget/>
          </div>
        </div>
      </nav>
    </header>

  )
}
