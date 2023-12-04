import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth } from './firebase';
import './Admin.css';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const nameRef = useRef();
  const secondNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const lawyerIdRef = useRef();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const name = nameRef.current.value;
    const secondName = secondNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const lawyerId = lawyerIdRef.current.value;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setSuccess(false);
      return;
    }

    const auth = getAuth();
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      setError(null);

      nameRef.current.value = '';
      secondNameRef.current.value = '';
      emailRef.current.value = '';
      passwordRef.current.value = '';
      confirmPasswordRef.current.value = '';
      lawyerIdRef.current.value = '';

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('Email is already in use. Please use a different email.');
          break;
        case 'auth/weak-password':
          setError('Password should be at least 6 characters long.');
          break;
        default:
          setError('Error signing up. Please try again.');
      }
      setSuccess(false);
    }
  };

  return (
    <div className="Admin">
      <div className="Heading">
        <p>
          <b>Admin Panel</b>
        </p>
      </div>
      <div className="wrapper">
        <div className="login1">
          <div>
            <p className="text_login">
              <b>Admin Panel</b>
            </p>
            <div className="User">
              <input
                type="text"
                className="input_field"
                placeholder="Name"
                ref={nameRef}
              />
              <input
                type="text"
                className="input_field"
                placeholder="Second name"
                ref={secondNameRef}
              />
            </div>
            <div className="User">
              <input
                type="email"
                className="input_field"
                placeholder="Email"
                ref={emailRef}
              />
              <input
                type="password"
                className="input_field"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            <div className="User">
              <input
                type="password"
                className="input_field"
                placeholder="Confirm Password"
                ref={confirmPasswordRef}
              />
              <input
                type="text"
                className="input_field"
                placeholder="Lawyer ID"
                ref={lawyerIdRef}
              />
            </div>
            <div className="Submit">
              <button onClick={handleSignUp}>
                <b>Sign Up</b>
              </button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      </div>
      {success && (
        <div className="success-message">
          <p>Registration successful! You will be redirected to the home page.</p>
        </div>
      )}
    </div>
  );
}
