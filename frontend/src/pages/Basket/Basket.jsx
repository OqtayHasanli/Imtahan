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
import "./basket.scss"
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Basket = () => {
  const basket = useSelector((state) => state.counter.basket);
  console.log(basket);
  const dispatch = useDispatch();
  

  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Basket Page</title>
      </Helmet>
  </HelmetProvider>

    <button className="deleteall">DELETE ALL BASKET</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((elem) => {
            return (
              <tr>
                <td><img className="imagebasket" src={elem.image} alt="" /></td>
                <td>{elem.title}</td>
                <td>{elem.category}</td>
                <td>{elem.price*elem.count}</td>
                <td>
                  <button className="plusminus" onClick={() => dispatch(incrementCount(elem))}>+</button>
                  {elem.count}
                  <button className="plusminus" onClick={() => dispatch(decrementCount(elem))}>-</button>
                  </td>
                <td>
                  <button className="basketremove" onClick={() => dispatch(removefromBasket(elem))}>Remove</button>
                  </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Basket;
