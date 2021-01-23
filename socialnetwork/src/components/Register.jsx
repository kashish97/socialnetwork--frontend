import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useHistory } from "react-router-dom";
import axios from "axios";


export default function Register() {
    const history = useHistory();

    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [age, setAge] = useState("");
    const [dob, setDob] = useState("");
    const [state, setState] = useState("");

    async function getAvailableUserName(event) {
        event.preventDefault();
        axios.get('http://localhost:7000/users/' + username).then(response => {
            console.log(response.data);
            if (response.data == false) {
                    return false;
            }
            else{
            return true;
            }
        }).catch(err => {
            console.error(err);
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(getAvailableUserName(event)==false){
            alert("Username already in use...");
            return;
        }

        if(password!=confirmPassword){
            alert("Passwords do not match..");
            return;
        }

        const register = {
            "name": name,
            "username": username,
            "password": password,
            "state": state,
            "age": age
        };

        axios.post('http://localhost:7000/users/signup', register)
            .then(response => {
                console.log(response.data);
                localStorage.setItem("User", response.data);
                if(response.status==200){
                    history.push("/timeline");
                }
            });
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="name"
                        value={name}
                        required = {true}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="username"
                        value={username}
                        required = {true}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        required = {true}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={confirmPassword}
                        required = {true}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        type="text"
                        value={state}
                        
                        onChange={(e) => setState(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit">
                    Register
        </Button>
            </Form>
        </div>
    );
}