import React,{useEffect, useState, Fragment} from 'react';
import axios from 'axios';
import AboutUs from './home/aboutUs';
import Features from './home/category';
import Footer from './home/footer';
import MainBanner from './home/mainBanner';
import DatePicker from "react-datepicker";
import {withRouter} from 'react-router-dom'
import { Card, Row, Container, Col, Nav,Button,Form,Navbar,FormControl ,Fade, DropdownButton,Dropdown} from 'react-bootstrap';
import Modal from './modal';
import {addDays} from 'date-fns';



const AdPost = (props)=>{



const [user,setUser]=useState({});
const [formModal, setformModal] = useState(false);
const [name, setname] = useState("");
const [title, settitle] = useState("");
const [address, setaddress] = useState("");
const [category, setcategory] = useState("");
const [image, setimage] = useState({});
const [city, setcity] = useState("");
const [state, setstate] = useState("");
const [price, setprice] = useState("");
const [condition, setcondition] = useState("");
const [description, setdescription] = useState("");
const [date, setdate] = useState("");
const [phone, setphone] = useState("");
const [adds, setadds] = useState([]);
const [filter, setfilter] = useState([]);
const [filterValue, setfilterValue] = useState('');
const[open, setOpen] = useState(false);



useEffect(()=>{
    fetchUser();
    fetchAd();
    console.log("highlight");
},[])

useEffect(() => {
  const filterAdd = async() =>
 {
  if(filterValue === "")
  {
    setfilter(adds);
  }
  else{
 let filteredADD = adds.filter(add => add.category === `${filterValue}`);
 setfilter(filteredADD);
  }
} 
filterAdd();
}, [filterValue]);

 const fetchAd = () =>
 {
   axios.get('http://localhost:3001/advertisement/',{
        headers:{'auth_token':`${JSON.parse(localStorage.getItem('auth_token'))}`}
          }).then( async (res) =>
          {
        
           await setadds(res.data);
           await setfilter(res.data)
        })
        .catch(err => {
         console.log(err.response.data);
        })

 }

 

const fetchUser = () =>
{
    axios.get('http://localhost:3001/user/getUser',{
        headers:{'auth_token':`${JSON.parse(localStorage.getItem('auth_token'))}`}
          }).then( async (res) =>
          {
          await setUser(res.data);
       
        })
        .catch(err => {
         console.log(err.response.data);
        })

}

const sendAd = (event) =>
{
event.preventDefault();
var formData = new FormData();
formData.append("AdImage",image);
formData.append("userId",user._id);
formData.append("title",title);
formData.append("category",category);
formData.append("condition",condition);
formData.append("description",description);
formData.append("name",name);
formData.append("price",price);
formData.append("phone",phone);
formData.append("city",city);
formData.append("address",address);
formData.append("date",date);

console.log(formData);

axios.post('http://localhost:3001/advertisement/add',formData,{
  headers:{'auth_token':`${JSON.parse(localStorage.getItem('auth_token'))}`}
    }).then( res =>
      {
        console.log(res.data);
        fetchAd();
      }).catch(err => {
        console.log(err.response.data);
       })

}

    return (
        <div>
         
          {
            formModal && <Modal closeModal ={()=> setformModal(false)}>
<Form  encType="multipart/form-data"  onSubmit={sendAd}>

  
    <Form.Group >
      <Form.Label>NAME</Form.Label>
      <Form.Control type="text" placeholder="Enter name" onChange={({target}) => setname(target.value) } />
    </Form.Group>

<Form.Group>
<Form.Label>CATEGORY</Form.Label>
    <Form.Control as ="select" onChange={({target})=>setcategory(target.value)}>
      <option>select</option>
      <option>CARS</option>
      <option>MOBILE PHONES</option>
      <option>FURNITURES</option>
      <option>MOTOR BIKES</option>
    </Form.Control>
</Form.Group>

    <Form.Group>
     <Form.File >
      <Form.File.Label >UPLOAD IMAGE </Form.File.Label>
      <Form.File.Input onChange={(event)=>setimage(event.target.files[0])}/>
    </Form.File>
    </Form.Group>

    <Form.Group>
      <Form.Label>TITLE</Form.Label>
      <Form.Control type="text" placeholder="enter title" onChange={({target})=>settitle(target.value)}/>
    </Form.Group>

    <Form.Group>
      <Form.Label>CONDITION</Form.Label>
      <Form.Control type="text" placeholder="Enter condition" onChange={({target}) => setcondition(target.value) } />
    </Form.Group>

    <Form.Group>
      <Form.Label>DESCRIPTION</Form.Label>
      <Form.Control type="text" placeholder="write something about your product" onChange={({target}) => setdescription(target.value) } />
    </Form.Group>

    <Form.Group>
      <Form.Label>PRICE</Form.Label>
      <Form.Control type="text" placeholder="PRICE" onChange={({target}) => setprice(target.value) } />
    </Form.Group>

    <Form.Group>
    <Form.Label>DATE</Form.Label>
    <DatePicker
      selected={date}
      onChange={date => setdate(date)}
      minDate={new Date()}
      // maxDate={addDays(new Date(), 5)}
      placeholderText="Select a date "
    />
    </Form.Group>

    <Form.Group>
      <Form.Label>CONTACT NUMBER</Form.Label>
      <Form.Control type="text" placeholder="Enter your contact no" onChange={({target}) => setphone(target.value) } />
    </Form.Group>

  <Form.Group>
    <Form.Label>ADDRESS</Form.Label>
    <Form.Control type="text" placeholder="1234 Main St" onChange={({target})=>setaddress(target.value)}/>
  </Form.Group>
  
<Form.Row>
    <Form.Group as={Col} >
      <Form.Label>CITY</Form.Label>
      <Form.Control as ="select" value="Choose..."onChange={({target})=>setcity(target.value)}>
      <option>TIRUCHIRAPPALLI </option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>State</Form.Label>
      <Form.Control as="select" value="Choose..."onChange={({target})=>setstate(target.value)}>
        <option>TAMIL NADU</option>
       </Form.Control>
       </Form.Group>
</Form.Row>

<Button variant="primary" type="submit">
    POST
  </Button>
</Form>
            </Modal>
            
          }
            
             <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img src="S&B LOGO.png" className="mylogo" style={{height:"40px",width:"55"}}></img></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/aboutUs">About us</Nav.Link>
        <button onClick={()=>
        { 
          localStorage.clear();
        props.history.push('/'); 
      }} 
      
        className="logout">Logout</button>
            
      </Nav>
    <Form inline>
    </Form>
  </Navbar>
  <div className="bg">
<div className="d-flex align-items-center justify-content-center"> 
  <Button variant="dark" onClick={()=>setformModal(true)} style={{marginLeft:"25px"}}>Post Ad</Button> &nbsp;

<Form.Group>
    <Form.Label><b>Show ads category</b></Form.Label>
    <Form.Control as="select" value={filterValue}   onChange={({target}) =>  setfilterValue(target.value)} >
      <option value="">All</option>
      <option>CARS</option>
      <option>MOBILE PHONES</option>
      <option>FURNITURES</option>
      <option>MOTOR BIKES</option>
    </Form.Control>
  </Form.Group>
  <Button variant="dark" className="deletebutton">Delete Ad</Button>

</div>
  <br></br> 
<Container>
    <Row>
        

        {filter.map((adds,index) => (
          <Col key={index}>
        <div className="card" style={{width: "18rem",height:"550px"}}>
        <img src={`http://localhost:3001/advertisement/${adds._id}/image`}   className="card-img-top" alt="product image"/>
        <div className="card-body">
        <h5 className="card-title">{adds.title}</h5>
        <p>Ad posted by&nbsp;<b>{adds.name}</b></p>
        <h5>PRICE :Rs.{adds.price}</h5>
        <h6>{adds.date}</h6>
          <p className="card-text"><b>DESCRIPTION :</b>{adds.description}</p>
        </div>
      </div>
        </Col>
        ))}
    </Row>
    </Container>
<br/>
    </div>
    </div>
       
        )
}
export default withRouter(AdPost);
