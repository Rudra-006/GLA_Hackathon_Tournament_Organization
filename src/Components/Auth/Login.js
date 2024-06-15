import { Button } from '@mui/material';
import React, { useState } from 'react'
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignup = async(e) => {
        e.preventDefault();
        try{
          const data = await signInWithEmailAndPassword(auth, email, password);
          console.log(data);
          navigate('/tournamentApp')
        }catch(err){
          console.log(err)
        }
    }

  return (
    <div>
        Email<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        Password<input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
        <Button type='button' onClick={handleSignup}>Login</Button><br/>
        <Link to={'/'}>go home</Link>
    </div>
  )
}

export default Signup
