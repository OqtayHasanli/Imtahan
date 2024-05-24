import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import Basket from './pages/Basket/Basket';
import Favorite from './pages/Favorite/Favorite';
import Nopage from './pages/Nopage/Nopage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './pages/Detail/Detail';
import Adminpanel from './pages/Adminpanel/Adminpanel';

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
          <Route path="basket" element={<Basket />} />
          
          <Route path="favorite" element={<Favorite />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="*" element={<Nopage />} />
        </Route>
        <Route path="admin" element={<Adminpanel />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
