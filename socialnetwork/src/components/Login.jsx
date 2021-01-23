import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useHistory } from "react-router-dom";

import axios from "axios";
export default function Login() {
    const history = useHistory();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  

  function handleSubmit(event) {
    event.preventDefault();
    const login = {
        "username":username,
        "password":password
    };

    axios.post('http://localhost:7000/users/login',login)
        .then(response =>{
            console.log(response.data);
            localStorage.setItem("User",response.data);
            if(response.status===200){
                history.push("/timeline")
            }
        });

    


  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}