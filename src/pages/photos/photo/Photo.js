import React, { useContext , useReducer, useState} from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../../contexts/ThemeContexts";
import CartContext from "../../../contexts/CartContext";
import PhotoReducer from "../../../reducers/PhotoReducer";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import "./Photo.css";
import { MdAdd, MdRemoveShoppingCart } from "react-icons/md";



const Photo = ({ photo }) => {

  const themeValues = useContext(ThemeContext);
  //const [added, setAdded] = useState(false);
  const [state, dispatch] = useReducer(PhotoReducer, {added: false})
  const {dispatchCart} = useContext(CartContext);

  const addedHandler= ()=>{
    if (state.added){
      dispatch({
        type: "REMOVE_FROM_CART"
      })
      dispatchCart({
        type: "REMOVE_FROM_CART",
        id : photo.id,
      })
    }else{
      dispatch({
        type: "ADD_TO_CART"
      })
      dispatchCart({
        type: "ADD_TO_CART",
        id : photo.id,
      })
    }
  }

  return (
    <li>
      <div className="photoControl">
        <Link to={`/photo/${photo.id}`}>
          <h4>{photo.name}</h4>
        </Link>
      </div>
      <div className="photoControl">
        <Image src={photo.image} />
      </div>
      <div className="photoControl">
        <Button onclickHandler={addedHandler} style={{color : themeValues.theme.color, borderColor: themeValues.theme.color}}>
          {state.added ? (
            <>
              <MdRemoveShoppingCart/>
              Remove from my Favorites
            </>
          ): (
            <>
              <MdAdd/>
              Add to my Favorites
            </>
          )}
        </Button>
      </div>
    </li>
  );
};
export default Photo;
