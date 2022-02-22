import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import './login.scss';
import { Link, useNavigate } from "react-router-dom";
import util from "../../utilities/serviceCalls"


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const emailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const navigate = useNavigate();

  function changeState({target}, setterFunction){
      setterFunction(target.value)
  }
  function handleRegister(e){
    e.preventDefault()
    if(!emailregex.test(email)){
        setError("Please check the email you provided")
        return
    }
    if(password=="" || username==""){
        setError("Please enter password/username")
        return
    }
    setError('')
    util.post("/api/register",{
      email,
      password,
      name: username
    }).then(response=>{
      if(response.data.success){
        setShowModal(true)
        localStorage.setItem("username", username)
      }
      else{
        setError("Something went wrong")
      }
    })
  }
  function goHome(){
        navigate('/home');

  }
    return (
      <div className="Register sessionStyles">
        <Container fluid>
          <Row className='align-items-center fullHeight'>
            <Col ></Col>
            <Col >
              <div className='blueBox' >

                  <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3">
                     <Form.Label>Email address</Form.Label>

                      <Form.Control
                        type="text"
                        name="email"
                        onChange={(e) => { changeState(e,setEmail); }}
                      >
                      </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        onChange={(e) => { changeState(e,setUsername); }}
                      >
                      </Form.Control>
                    </Form.Group>
                    <Form.Group className="">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        onChange={(e) => { changeState(e,setPassword); }}
                      >
                      </Form.Control>
                    </Form.Group>
                    <Form.Group className="error mb-2" controlId="formBasicPassword">
                            <Form.Text  style={{opacity: error=="" ? 0 : 1}}> {error || "-"}</Form.Text>
                        </Form.Group>
                    <Form.Group className="mb-3 text-center">
                      <Button variant="primary" type="submit">
                            Register
                      </Button>
                      <Button variant="secondary" type="button" onClick={()=>{navigate('/login')}}>
                            Cancel
                      </Button>
                    </Form.Group>
                  </Form>
                </div>
              </Col>

            
            <Col ></Col>

          </Row>
        </Container>

        <Modal show={showModal} >
          
          <Modal.Body>Signed up successfully!</Modal.Body>
          <Modal.Footer>
            
            <Button variant="primary" onClick={goHome}>
              Next
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

export default Register;
