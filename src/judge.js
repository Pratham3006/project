import React, { useRef, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Import your Firebase config
import './judge.css';

export default function Judge() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (username.endsWith('@judge.com')) {
      try {
        await signInWithEmailAndPassword(auth, username, password);
        setLoginSuccess(true);
        setLoginError('');
        // You can add code to navigate to the next page upon successful login
      } catch (error) {
        setLoginSuccess(false);
        setLoginError(error.message);
      }
    } else {
      setLoginSuccess(false);
      setLoginError('Unauthorized access found');
    }
  };

  return (
    <div className="Pratham">
      <div className="wrapper">
        <nav className="nav">
          <div className="nav-logo">
            <img
              width="94"
              height="94"
              src="https://img.icons8.com/3d-fluency/94/law.png"
              alt="law"
            />
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#" className="link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="link">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="link">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="link">
                  FAQ's
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-button">
            <button className="button">Sign up</button>
          </div>
        </nav>
        <div className="login">
          <div>
            <p className="text_login">
              <b>Justice League</b>
            </p>
            <div className="User">
              <input
                type="text"
                className="input_field"
                placeholder="Username"
                ref={usernameRef}
              />
            </div>
            <div className="User">
              <input
                type="password"
                className="input_field"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
          </div>
          <div>
            <button onClick={handleLogin}>Log in</button>
          </div>
          {loginSuccess && <p>Login successful!</p>}
          {loginError && <p>{loginError}</p>}
        </div>
      </div>
    </div>
  );
}
