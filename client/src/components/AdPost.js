import React,{useEffect, useState, Fragment} from 'react';
import axios from 'axios';
import AboutUs from './home/aboutUs';
import Features from './home/features';
import Footer from './home/footer';
import MainBanner from './home/mainBanner';
import { Card, Row, Container, Col, Nav,Button,Form,Navbar,FormControl } from 'react-bootstrap';



const AdPost = (props)=>{



const [user,setUser]=useState([]);



useEffect(()=>{
    fetchUser();
},[])

const adpost =()=>
{

}

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
            {/* <span>home page</span>
            <ul>
            {user.map((data,index) => (
                <Fragment key={index}>
                <li>{data.email}</li>
                <li>{data.name}</li>
                </Fragment>
                ))} 
                
            </ul>
             */}
             <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Selling-product-website</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#category">Features</Nav.Link>
      <Nav.Link href="#cities">Pricing</Nav.Link>
    </Nav>
    <Form inline>
    </Form>
  </Navbar>
  <br />
  <div>
      <img src=""className =""></img>
  </div><br></br>

  <Button variant="dark" handleClick={adpost} style={{marginLeft:"25px"}}>Post Ad</Button>
  <Form>
  <Form.Row>
    <Form.Group as={Col} >
      <Form.Label>NAME</Form.Label>
      <Form.Control type="text" placeholder="Enter name" onChange={(e)=> setName} />
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>TITLE</Form.Label>
      <Form.Control type="text" placeholder="enter title" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress">
    <Form.Label>ADDRESS</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>
  <Form.Group as={Col}>
      <Form.Label>CATEGORY</Form.Label>
      <Form.Control as ="select" value="Choose...">
      <option>CAR</option>
      <option>MOTOR BIKE</option>
      <option>FURNITURE</option>
      <option>MOBILE PHONES</option>
</Form.Control>
    </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>CITY</Form.Label>
      <Form.Control as ="select" value="Choose...">
<option>TIRUCHIRAPPALLI </option>
</Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" value="Choose...">
        <option>TAMIL NADU</option>
       
      </Form.Control>
    </Form.Group>
</Form.Row>

  <Button variant="primary" type="submit">
    POST
  </Button>
</Form>
  <br></br>
<Container>
    <Row>
        <Col>
        <div class="card" style={{width: "18rem;"}}>
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">CAR</h5>
          <p class="card-text">second hand cars available </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        </Col>
<Col>
        <div class="card" style={{width: "18rem;"}}>
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">MOTOR BIKE</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        </Col>
        <Col>
        <div class="card" style={{width: "18rem;"}}>
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">FURNITURES</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        </Col>
        <Col>
        <div class="card" style={{width: "18rem;"}}>
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">MOBILE PHONES</h5>
          <p class="card-text"> </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        </Col>
    </Row>
    </Container>
<br/>
    </div>
       
        )
}


export default AdPost;