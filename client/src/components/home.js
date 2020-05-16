import React,{useEffect, useState, Fragment} from 'react';
import axios from 'axios';

const Home = (props)=>{



const [user,setUser]=useState([]);



useEffect(()=>{
    fetchUser();
},[])



const fetchUser = () =>
{
    axios.get('http://localhost:3001/user/getUser',{
        headers:{'auth_token':`${JSON.parse(localStorage.getItem('auth_token'))}`}
          }).then( async (res) =>
          {
          await setUser([res.data]);
       
        })
        .catch(err => {
         console.log(err.response.data);
        })

}

    return (
        <div>
        {/* <p>(JSON.stringify(json))</p>
        <button onClick={()=>{
            localStorage.clear();
            props.push.history('/login');
            }} className="btn btn-primary">Logout</button> */}
            <span>home page</span>
            <ul>
            {user.map((data,index) => (
                <Fragment key={index}>
                <li>{data.email}</li>
                <li>{data.name}</li>
                </Fragment>
                ))} 
                
            </ul>
        </div>
        )
}

export default Home;