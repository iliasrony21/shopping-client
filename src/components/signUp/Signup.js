import React from 'react'
import { LoginIcon } from '@heroicons/react/solid'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Signup.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [
    createUserWithEmailAndPassword,
    user
  ] = useCreateUserWithEmailAndPassword(auth)

  const handleEmail = event => {
    setEmail(event.target.value)
  }
  const handlePassword = event => {
    setPassword(event.target.value)
  }
  const handleConfirmPassword = event => {
    setConfirmPassword(event.target.value)
  }
  if (user) {
    navigate('/shop')
  }
  const handleCreateUser = event => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setError('password do not match')

      return
    }
    if (password < 5) {
      setError('password is too short')
    }
    createUserWithEmailAndPassword(email, password)
  }
  return (
    <div className='login-container'>
      <div className='container'>
        <h1 className='title'>Sign Up!!!!</h1>
        <div className='input-field'>
          <form className='form-details'>
            <label htmlFor=''>Email</label>
            <br />

            <input
              onBlur={handleEmail}
              type='email'
              name=''
              id=''
              required
              placeholder='Your email'
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
            <br />
            <label htmlFor=''>Confirm Password</label>
            <br />
            <input
              onBlur={handleConfirmPassword}
              type='password'
              name=''
              id=''
              placeholder='Confirm password'
              required
            />
            <p style={{ color: 'red' }}>{error}</p>
            <input
              onClick={handleCreateUser}
              className='btn'
              type='submit'
              value='Sign Up'
            />
          </form>
          <p className='signup'>
            Already have an account?
            <Link className='link-details' to='/login'>
              Log In
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

export default Signup
