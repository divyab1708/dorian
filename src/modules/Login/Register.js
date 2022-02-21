import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import './login.scss';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const emailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        onChange={(e) => { changeState(e,setPassword); }}
                      >
                      </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Text  style={{opacity: error=="" ? 0 : 1}}> {error || "-"}</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Button variant="primary" type="submit">
                            Submit
                      </Button>
                    </Form.Group>
                  </Form>
                </div>
              </Col>

            
            <Col ></Col>

          </Row>
        </Container>
      </div>
    );
  }

export default Register;
