import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Login.css'
import { LoginIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error
  ] = useSignInWithEmailAndPassword(auth)

  const handleEmail = event => {
    setEmail(event.target.value)
  }
  const handlePassword = event => {
    setPassword(event.target.value)
  }
  if (user) {
    navigate(from, { replace: true })
  }
  const handleUserSignin = event => {
    event.preventDefault()
    signInWithEmailAndPassword(email, password)
  }

  return (
    <div className='login-container'>
      <div className='container'>
        <h1 className='title'>Log In!!!!</h1>
        <div className='input-field'>
          <form onSubmit={handleUserSignin} className='form-details'>
            <label htmlFor=''>Email</label>
            <br />

            <input
              onBlur={handleEmail}
              type='email'
              name=''
              id=''
              placeholder='Your email'
              required
            />
            <br />
            <label htmlFor=''>Password</label>
            <br />
            <input
              onBlur={handlePassword}
              type='password'
              name=''
              id=''
              placeholder='Your password'
              required
            />
            <input className='btn' type='submit' value='Login' />
          </form>
          <p className='signup'>
            New to Ema-john?
            <Link className='link-details' to='/signup'>
              Create new Account
            </Link>
          </p>
          <div className='line'>
            <p>
              <span>or</span>
            </p>
          </div>
        </div>

        <button className='google-signin'>
          <span className='icons'>
            <LoginIcon className='icon text-blue-500' />
          </span>{' '}
          Continue with Google
        </button>
      </div>
    </div>
  )
}

export default Login
