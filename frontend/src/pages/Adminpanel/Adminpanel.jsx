
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./admin.scss"
const Adminpanel = () => {
    const [Data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3100/users").then((res) => setData(res.data));
  }, []);
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Admin Panel</title>
      </Helmet>
  </HelmetProvider>
  <Formik
       initialValues={{ title: '', category: '', price: 0 ,image:""}}
       validationSchema={Yup.object({
        title: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
           category: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
           price: Yup.number(),
           imager:Yup.string()
       })}
       onSubmit={(values, { setSubmitting }) => {
         axios.post("http://localhost:3100/users",{...values}).then(res=>console.log(res))
       }}
     >
       <Form className='formadmin'>
         <label htmlFor="title">title</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
 
         <label htmlFor="category">category</label>
         <Field name="category" type="text" />
         <ErrorMessage name="category" />
 
         <label htmlFor="price">price</label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />

         <label htmlFor="image">image</label>
         <Field name="image" type="text" />
         <ErrorMessage name="image" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
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
          {Data.map((elem) => {
            return (
              <tr>
                <td>
                  <img className="imagebasket" src={elem.image} alt="" />
                </td>
                <td>{elem.title}</td>
                <td>{elem.category}</td>
                <td>{elem.price}</td>
                <td>
                <button className="basketremove" onClick={async() => {
                    await axios.delete(`http://localhost:3100/users/${elem._id}`)
                }}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

    </>
  
  )
}

export default Adminpanel