import React, { useEffect, useState } from "react";
import "./Menu.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { SlBasket } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import {
  setBasket,
  setFavorite,
  removefromBasket,
  incrementCount,
  decrementCount,
  removeAll,
} from "../../../../redux/slices/BaksteFavorite";
import { Link } from "react-router-dom";

const Menu = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3100/users").then((res) => setData(res.data));
  }, []);
  const favorite = useSelector((state) => state.counter.favorite);
  const dispatch = useDispatch();

  return (
    <div className="mainmenu">
      <div className="containermenu">
        {Data.map((elem) => {
          return (
            <div className="mycard">
                <button onClick={() => dispatch(setFavorite(elem))} className="favbtn"> 
                <FaHeart className={favorite.find(item=>item._id==elem._id)?"heartafter": "heartbefore" } />
                </button>
              <div className="imagediv">
                <Link to={`/${elem._id}`}>
                <img className="imagedivin" src={elem.image} alt="" />
                </Link>
              </div>
              <div className="mydesc">
                <div className="cardtitle">{elem.title}</div>
                <div className="cardcategory">{elem.category}</div>
                <div className="cardprice">${elem.price}</div>
              </div>
              <div className="btnmenu">
                <button  onClick={() => dispatch(setBasket(elem))} className="basketbtn">Add to Cart <SlBasket /></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
