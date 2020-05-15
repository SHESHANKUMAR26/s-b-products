import React,{useEffect, useState} from 'react';
import axios from 'axios';

const Home = (props)=>{
const[json,setJson]=useState([]);
useEffect(()=>{
    axios.get('http://localhost:5000/api/getAll',{
        headers:{'auth':`${JSON.parse(localStorage.getItem('auth'))}`}
})
        .then(res=>{
           setJson(res.userInputData);
        })
        .catch(err => {
         console.log(err.response.data);
        })
},[])
    return (
        <div>
        <p>(JSON.stringify(json))</p>
        <button onClick={()=>{
            localStorage.clear();
            props.push.history('/login');
            }} className="btn btn-primary">Logout</button>
        </div>
        )
}

export default Home;