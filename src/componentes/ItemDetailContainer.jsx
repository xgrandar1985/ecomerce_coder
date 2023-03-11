import { Link } from "react-router-dom";
import { useNavigate,useParams } from "react-router-dom";
import "./styles/ItemDetalle.css"
import {useState,useEffect} from "react";

import { db } from '../firebaseConfig/firebase.js';
import {collection,getDocs,deleteDoc,doc,getDoc} from "firebase/firestore" 
import { ItemDetail } from "./ItemDetail";



function ItemDetailContainer() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [product,setProduc] = useState({})

    const getProductById = async () => {

      const productoRef = doc(db, "productos", id);
      const producto = await getDoc(productoRef);

      if (producto.exists()) {
        setProduc(producto.data())
      } else {
        console.log("No such document!");
      }
      

    };

  useEffect(()=>{

      getProductById()
  
  },[])

  return (

    <div className="container mt-5 py-4 px-xl-5">
      <div className="row mb-5">
        <ItemDetail product={product}/>
      </div>

      <div className="row">
        <div className="col-md-12 mb-4">
          <hr />
          <div className="text-muted my-4">
                <Link to={"/productos/"} className="btn btn-outline-dark" replace>
                    Seguir comprando
                </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
