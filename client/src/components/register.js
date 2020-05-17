import React,{Component} from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import {useFormik} from 'formik';
import * as yup from 'yup';
import axios from 'axios'
import Login from './login';
import { withRouter } from 'react-router-dom';


const Register = (props) => {
  const formik = useFormik({
    initialValues : 
    {
      name: "",
      email:"",
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
    
      password:yup.string()
      .required("Password is required"),
    
      confirmPassword:yup.string()
      .required("Confirm Password is required")
      .oneOf([yup.ref('password'),null],"Password and Confirm Password should be same")
    }),
    onSubmit:(userInputData)=> {
      console.log(userInputData);
      axios.post('http://localhost:3001/user/register',userInputData).then(response =>
      {
        console.log(response.data);
        props.history.push('/login');
      }).catch(err =>
        {
          console.log(err.response.data);
        })
    
    }
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
        <button className = "btn btn-primary" >Submit</button><br></br>
        Already had an account?
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


export default withRouter(Register);