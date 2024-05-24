import React, { useEffect, useState } from "react";
import axios from "axios";
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
import Table from "react-bootstrap/Table";
import "../Basket/basket.scss";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Favorite = () => {
  const favorite = useSelector((state) => state.counter.favorite);
  console.log(favorite);
  const dispatch = useDispatch();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Favorite Page</title>
        </Helmet>
      </HelmetProvider>

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
          {favorite.map((elem) => {
            return (
              <tr>
                <td>
                  <img className="imagebasket" src={elem.image} alt="" />
                </td>
                <td>{elem.title}</td>
                <td>{elem.category}</td>
                <td>{elem.price}</td>

                <td>
                  <button
                    className="basketremove"
                    onClick={() => dispatch(setFavorite(elem))}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Favorite;
