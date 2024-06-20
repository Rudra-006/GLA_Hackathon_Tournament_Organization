import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      console.log(data);
      navigate("/tournamentApp");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{marginTop:'6px'}}>
      <Typography variant="h4">Login to Continue!</Typography>
      <Stack
        width={"fit-content"}
        justifyContent={"center"}
        border={"2px solid gainsboro"}
        borderRadius={"5px"}
        padding={"10px"}
        margin={"auto"}
        mt={5}
        bgcolor={"gainsboro"}
      >
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button variant="contained" type="button" onClick={handleSignup}>
          Login
        </Button>
        <br />
        <Link to={"/"}>go home</Link>
      </Stack>
    </div>
  );
};

export default Login;
