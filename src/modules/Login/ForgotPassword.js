
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import util from "../../utilities/serviceCalls"

import './login.scss';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

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
  
    setError('')
    util.post("/api/forgot",{
      email
    }).then(response=>{
      if(response.data.success){
       setShowModal(true)
        
      }
      else{
        setError("User with this email is not registered")
      }
    })
    
    
  }
  function closeModal(){
    setShowModal(false)
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

                       
                        <Form.Group className="error  mb-2" controlId="formBasicPassword">
                            <Form.Text  style={{opacity: error=="" ? 0 : 1}}> {error || "-"}</Form.Text>
                        </Form.Group>

                        <Form.Group className="text-center">
                          <Button variant="primary" type="submit">
                              Send
                          </Button>
                          <Button variant="secondary" type="button" onClick={()=>{navigate("/login")}}>
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
          
          <Modal.Body>An email has been sent to you to reset the password</Modal.Body>
          <Modal.Footer>
            
            <Button variant="primary" onClick={()=>{navigate("/login")}}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
}

export default ForgotPassword;
