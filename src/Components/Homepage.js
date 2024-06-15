import { onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { Link } from 'react-router-dom';

const Homepage = () => {

  return (
    <div>
      Homepage<br/>
      <Link to={'/login'}>Login</Link><br/>
      <Link to={'/signup'}>Signup</Link>
    </div>
  )
}

export default Homepage
