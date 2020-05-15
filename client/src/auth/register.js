import React,{Component} from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import {useFormik} from 'formik';
import * as yup from 'yup';
import axios from 'axios'
import Login from './login';


const Register = () => {
  const formik = useFormik({
    initialValues : 
    {
      name: "",
      email:"",
      gender:"",
      password:"",
      confirmPassword:""
    },
    
    
    validationSchema:yup.object({
      
      name:yup.string()
      .required("Name is required")
      .strict()
      .trim()
      .min(3, "Minimum 3 characters required")
      .max(20, "Maximum 20 characters only"),
      
      email:yup.string()
      .email()
      .required("Email is required"),
    
      gender:yup.string()
      .required("Select your gender"),
    
      password:yup.string()
      .required("Password is required"),
    
      confirmPassword:yup.string()
      .required("Confirm Password is required")
      .oneOf([yup.ref('password'),null],"Password and Confirm Password should be same")
    }),
    onSubmit:(userInputData)=> {console.log(userInputData);}
})
  return (
    <div className = "container mt-4 ">
       
        <div className = "jumbotron"> 
        <h2>REGISTER</h2><br></br>
          <form autoComplete = "off" onSubmit = {formik.handleSubmit}>
            <div className = "form-group">
              <label>Name:</label>
              <input 
              className = "form-control" 
              type = "text" 
              name ="name" 
              onChange ={formik.handleChange} 
              value = {formik.values.name}
              />
            {formik.errors.name ?
          <div className = "text-danger">{formik.errors.name}</div>
        :null
      }
</div>
<div className = "form-group">
        <label>Email:</label>
        <input 
        className = "form-control" 
        type = "text" 
        name ="email" 
        onChange ={formik.handleChange} 
        value = {formik.values.email}
        />
        {formik.errors.email ?
        <div className = "text-danger">{formik.errors.email}</div>
      :null
        }
</div>
<div className="form-group">
  <label>Gender</label>
  <select
  name ="gender" 
  onChange ={formik.handleChange} 
  value = {formik.values.gender}
   className="form-control" id="sel1">
     <option>---Select One---</option>
    <option>Male</option>
    <option>Female</option>
    <option>Transgender</option>
  </select>
  {formik.errors.gender ?
        <div className = "text-danger">{formik.errors.gender}</div>
      :null
        }
</div>
<div className = "form-group">
    <label>Password:</label>
        <input 
        className = "form-control" 
        type = "text" 
        name ="password" 
        onChange ={formik.handleChange} 
        value = {formik.values.password}
        />
    {formik.errors.password ?
        <div className = "text-danger">{formik.errors.password}</div>
      :null
    }
</div>
<div className = "form-group">
        <label>Confirm Password:</label>
        <input 
        className = "form-control" 
        type = "text" 
        name ="confirmPassword" 
        onChange ={formik.handleChange} 
        value = {formik.values.confirmPassword}
        />
        {formik.errors.confirmPassword ?
        <div className = "text-danger">{formik.errors.confirmPassword}</div>
      :null
        }
</div>
        <button className = "btn btn-primary">Submit</button><br></br>
        Already had a account?
        <a href ="#"
        onClick ={()=>{
            window.location.href = 'Login';
        }}
        >
        Login
        </a>
      </form>
      </div>
    </div>
  );
}


export default Register;