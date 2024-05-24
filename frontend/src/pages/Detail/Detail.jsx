import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./detail.scss";
import { SlBasket } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import {
  setBasket,
  setFavorite,
  removefromBasket,
  incrementCount,
  decrementCount,
  removeAll,
} from "../../redux/slices/BaksteFavorite";
import { useSelector, useDispatch } from "react-redux";

const Detail = () => {
  const favorite = useSelector((state) => state.counter.favorite);
  const dispatch = useDispatch();
  const [first, setfirst] = useState({});
  const { id } = useParams();
  axios
    .get(`http://localhost:3100/users/:${id}`)
    .then((res) => setfirst(res.data));

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img className="detailimage" src={first.image} alt="" />
          </td>
          <td>{first.title}</td>
          <td>{first.category}</td>
          <td>{first.price}</td>

          <td>
            <button
              className="addbasketdetail"
              onClick={() => dispatch(setBasket(first))}
            >
              Add to Basket
            </button>
            <FaHeart
              onClick={() => dispatch(setFavorite(first))}
              className={
                favorite.find((item) => item._id == first._id)
                  ? "heartafter"
                  : "heartbefore"
              }
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Detail;
