import { Button } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault();
        let data = createUserWithEmailAndPassword(auth, email, password);
        console.log(data);
        navigate('/tournamentApp')
    }

  return (
    <div>
        Email<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        Password<input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
        <Button type='button' onClick={handleSignup}>Signup</Button><br/>
        <Link to={'/'}>go home</Link>
    </div>
  )
}

export default Signup
