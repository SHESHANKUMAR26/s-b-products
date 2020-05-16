import React,{Component} from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import {useFormik} from 'formik';
import {withRouter} from 'react-router-dom'
import * as yup from 'yup';
import axios from 'axios';


const Login = (props) => {
  const formik = useFormik({
    initialValues : 
    {
      email:"",
      password:""
    },
    
    
    validationSchema:yup.object({
      
      email:yup.string()
      .email()
      .required("Email is required"),
    
      password:yup.string()
      .strict()
      .trim()
      .required("Password is required")
    }),
    onSubmit:(userInputData)=> {
        console.log(userInputData);
        axios.post('http://localhost:3001/user/login',userInputData)
        .then(res=>{
            localStorage.setItem('auth_token',JSON.stringify(res.data.auth_token));
            props.history.push('/home');
        })
        .catch(err => {
           console.log(err.response.data);
        })
    }
});
  return (
    <div className = "container mt-4 ">
        <div className = "jumbotron">
            <h2>LOGIN</h2><br></br>
          <form autoComplete = "off" onSubmit = {formik.handleSubmit}>
           
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
        <button className = "btn btn-primary">Submit</button><br></br><br></br>
        don't have a account?
        <a href ="#"
        onClick ={()=>{
            window.location.href = 'Register';
        }}
        >
        Register
        </a>
      </form>
      </div>
    </div>
  );
}


export default withRouter(Login);