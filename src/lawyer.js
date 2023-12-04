import React, { useState } from 'react';
import './lawyer.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export default function Lawyer() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Check if the email ends with "@law.com" for lawyer access
    if (email.endsWith('@law.com')) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!'); // Display a pop-up message for successful login
      } catch (error) {
        alert('Login failed. Please check your credentials.'); // Display a pop-up message for failed login
      }
    } else {
      alert('Unauthorized access found. Please use a valid lawyer email.'); // Display an error message for unauthorized access
    }
  };

  return (
    <div>
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
        <div className="login2">
          <div>
            <p className="text_login">
              <b>Justice League</b>
            </p>
            <div className="User">
              <input
                type="text"
                className="input_field"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="User">
              <input
                type="password"
                className="input_field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button onClick={handleLogin}>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
