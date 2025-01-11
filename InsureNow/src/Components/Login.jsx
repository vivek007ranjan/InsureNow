import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { useAuth } from './utils/Auth';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValidCred, setIsValidCred] = useState(true);
  const navigate = useNavigate()
  const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login({ username, password });
    if(!auth.user )setIsValidCred(false);

  }

  useEffect(() => {

      // Check auth.user.role and navigate if necessary
      if (auth.user && auth.user.role === 'ProductOwner') {
        console.log(`user:${auth.user.username} logged in.`)
        navigate('/Dashboard');
      } else if (auth.user && auth.user.role === 'Client') {
        navigate('/Client');
      }
  }, [auth.user])


  return (
    <div className='bodybox'>
      <div className="container">
        <div className="card">
          {!isValidCred && <h2 className="CredWarning">Invalid Credentials !!</h2>}
          <h2 className="title">Login</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="logbtn btn-primary">Login</button>
          </form>
          <p className="form-text">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login