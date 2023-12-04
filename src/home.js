import React from 'react';
import './home.css';
import image from "./sldr3.jpg";
import src2 from "./sldr5.jpg";
import src3 from "./sldr4.jpg";
import lwimg from "./icons8-lawyer-100.png";
import jimg from "./icons8-judge-100.png";
import fb from "./icons8-facebook-100.png";
import wts from "./icons8-whatsapp-100.png";
import tel from "./icons8-telegram-100.png";
import cal from "./icons8-calls-100.png";
import gml from "./icons8-gmail-100.png";
import x from "./icons8-x-100.png";
import logo from "./icons8-law-100.png";



import { Link, useNavigate } from 'react-router-dom';

import lawyer from './lawyer';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';



function home() {
  
  
  return (
    <div className="homewrap">
      <nav className="Navbar9">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="text">
          <p>Home</p>
        </div>
        <div className="text">
          <p>About us</p>
        </div>
        <div className="text">
          <p>News</p>
        </div>
        <div className="text">
          <p>Installation</p>
        </div>
        <div className="text">
          <p>Mentions</p>
        </div>
      
      </nav>

      <div>
        <div className="slider-frame">
          <div className="slide-images">
            <div className="img-container">
              <img src={image} alt="" />
            </div>
            <div className="img-container">
              <img src={src2} alt="" />
            </div>
            <div className="img-container">
              <img src={src3} alt="" />
            </div>
          </div>
        </div>

        <div className="new-content">
          <div className="login-options">
            <h1><b>Choose your login</b></h1>
            <div className="parent-class-inbutton">
              <div className="inbutton">
                <img src={lwimg} alt="" />
                <Link to="./lawyer">
                <button>Lawyer</button>
                </Link>
              </div>
              <div className="inbutton">
                <img src={jimg} alt="" />
                <Link to="./judge">
                <button>Judge</button>
                </Link>
              </div>
            </div>
            <p><b>*Pls note that only Responsible person from Government of India can login*</b></p>
          </div>

          <div className="section">
            <p className="section-para"><b>"Our organization operates with an unwavering commitment to uphold the principles and regulations established by the esteemed High Court of India. This commitment forms the very core of our mission and sets the foundation for all our endeavors. The legal system in India is vast and multifaceted, with numerous cases arising daily that require attention, resolution, and justice. In this complex landscape, we have taken it upon ourselves to prioritize these cases in a manner that ensures fairness, efficiency, and adherence to the law."</b></p>
            <span>Stay Connected to us</span>
            <div className="Parent-class-Apps">
              <div className="Apps">
                <a href="https://www.facebook.com/MLJ.GovIndia/">
                  <img src={fb} alt="" />
                </a>
                <p><b>Facebook</b></p>
              </div>
              <div className="Apps">
                <a href="https://t.me/s/livelawindia">
                  <img src={tel} alt="" />
                </a>
                <p><b>Telegram</b></p>
              </div>
              <div className="Apps">
                <img src={wts} alt="" />
                <p><b>Whatsapp</b></p>
              </div>
              <div className="Apps">
                <a href="https://twitter.com/mlj_goi?lang=en">
                  <img src={x} alt="" />
                </a>
                <p><b>X</b></p>
              </div>
              <div className="Apps">
                <img src={gml} alt="" />
                <p><b>Gmail</b></p>
              </div>
              <div className="Apps">
                <img src={cal} alt="" />
                <p><b>Phone no</b></p>
                <p>011-23381023</p>
              </div>
            </div>
            <p><b>"All new suggestions and queries can be sent via this apps we entertain them we are open to know about them"</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
