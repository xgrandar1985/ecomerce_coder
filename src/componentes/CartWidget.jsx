import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

import React from 'react'

const CartWidget = () => {
  return (

    <>

        <Link to={"/carrito/"} className="btn btn-outline-dark" replace>
        <FontAwesomeIcon icon={faCartShopping} />
      <span className="ms-3 badge rounded-pill bg-dark">0</span>
        </Link>
</>


    
  )
}
export default CartWidget
