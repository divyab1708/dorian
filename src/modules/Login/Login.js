
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import util from "../../utilities/serviceCalls"

import './login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const emailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const navigate = useNavigate();
  function changeState({target}, setterFunction){
      setterFunction(target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    if(!emailregex.test(email)){
        setError("Please check the email you provided")
        return
    }
    if(password==""){
        setError("Please enter password")
        return
    }
    setError('')
    util.post("/api/login",{
      email,
      password
    }).then(response=>{
      if(response.data.success){
        localStorage.setItem("username", response.data.name)
        navigate('/home');
      }
      else{
        setError("Either email or password are invalid")
      }
    })
    
    
    
  }

  return (
    <div className="Login sessionStyles">
      <Container fluid>
        <Row className='align-items-center fullHeight'>
            <Col ></Col>
            <Col>
               <div className='blueBox' >
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(event)=>{changeState(event,setEmail)}}/>
                            
                        </Form.Group>

                        <Form.Group className="" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  onChange={(event)=>{changeState(event,setPassword)}} />
                        </Form.Group>
                        <Form.Group className="error mb-2" controlId="formBasicPassword">
                            <Form.Text  style={{opacity: error=="" ? 0 : 1}}> {error || "-"}</Form.Text>
                        </Form.Group>
                       <Form.Group className="text-center">
                          <Button variant="primary" type="submit">
                              Login
                          </Button>
                        </Form.Group>
                       <div className='fs-10 mb-3'><Link to="/forgotpassword" className='float-start'> Forgot Password </Link>  <Link to="/signup" className='float-end'>Sign up</Link></div>

                    </Form>

               </div>

            </Col>
            <Col ></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
