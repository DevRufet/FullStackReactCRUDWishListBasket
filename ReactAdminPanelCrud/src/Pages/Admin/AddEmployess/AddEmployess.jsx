import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './addemployess.scss'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function AddEmployess() {
  return(

<>
<Formik
       initialValues={{ title: '', price: '' }}
       validationSchema={Yup.object({
         title: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         price: Yup.number()
           .max(20, 'Must be 20 characters or less')
           .required('Required')
        
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           fetch("http://localhost:3000/products",{
             method:"post",
             headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(values)
           })
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="title">Title:</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
         <br />
         <label htmlFor="price">Price:</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
         <br />
         <button type="submit">Submit</button>
       </Form>
     </Formik>


</>

  )
}


export default AddEmployess