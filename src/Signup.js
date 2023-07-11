import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup"
import axios from 'axios'

const Signup = () => {
    const Navigate = useNavigate()

    const onSubmit = (values) => {
        axios.post("http://localhost:1234/create", values).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
        Navigate("/login")
    }

    const {handleSubmit, errors, handleChange, touched, handleBlur, values} = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
        validationSchema: yup.object().shape({
            password: yup.string()
            .required("This field cannot be empty")
            .min(4, "Cannot be less than 4 characters"),
            email: yup.string()
            .email()
            .required("This field cannot be empty"),
            lastName: yup.string()
            .required("This field cannot be empty"),
            firstName: yup.string()
            .required("This field cannot be empty")
        }),
        onSubmit

    })



  return (
    <>
      <div>
        <form onSubmit={handleSubmit} action="" className="w-50 mx-auto shadow-sm p-4">
          <h1 className="text-primary">SignUp</h1>
          <div className="mb-3">
            <label className="form-label">
              FirstName
            </label>
            <input name="firstName" type="text" className={errors.firstName? "is-invalid form-control":"form-control is-valid"} onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
            {touched.firstName && errors.firstName && <small className="text-danger fw-bold">{errors.firstName}</small>}

          </div>
          <div className="mb-3">
            <label className="form-label">
              LastName
            </label>
            <input name="lastName" type="text" className="form-control" onChange={handleChange} onBlur={handleBlur} value={values.lastName}/>
            {touched.lastName && errors.lastName && <small className="text-danger fw-bold">{errors.lastName}</small>}

          </div>
          <div className="mb-3">
            <label className="form-label">
              Email address
            </label>
            <input name="email" type="email" className="form-control" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
            {touched.email && errors.email && <small className="text-danger fw-bold">{errors.email}</small>}

          </div>
          <div className="mb-3">
            <label className="form-label">
              Password
            </label>
            <input name="password" type="password" className="form-control" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
            {touched.password && errors.password && <small className="text-danger fw-bold">{errors.password}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">
              Confirm Password
            </label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br />
          <span>
            Already have an account? <Link to={"/"}>Log in</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Signup;
