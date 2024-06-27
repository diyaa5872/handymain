import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import  "../stylesheets/Frontpage.css";
import "./Login";
import "./Registerworker";

const Frontpage = () => {
  const navigate = useNavigate();


  const handleUserClick = (e) => {
    e.preventDefault();
    navigate('/Loginuser');
  };

  const handleWorkerClick = (e) => {
    e.preventDefault();
    navigate('/Registerworker');
  };

  return (
    <div>
      <section className="home">
        <div className="description">
          <h1 className="title">
            <span className="gradient-text">Your Trusted Partner</span> for Home Services
          </h1>
          <p className="paragraph">
            Choose HandyHive for reliable, efficient, and high-quality home services. Our experienced professionals are here to provide comprehensive solutions that keep your home in top condition. We are dedicated to exceeding your expectations and delivering peace of mind.
          </p>
          <form id="form" autoComplete="off">
            <button onClick={handleUserClick} className="btn" aria-label="user">
              User
            </button>
            <button onClick={handleWorkerClick} className="btn" aria-label="worker">
              Worker
            </button>
          </form>
        </div>
        <div className="users-color-container">
          <span className="item" style={{ '--i': 1 }}></span>
          <img
            className="item"
            src="https://th.bing.com/th?id=OIP.5blBpsEQxPV8QxQMukWV8gHaHK&w=254&h=245&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            style={{ '--i': 2 }}
            alt=""
          />
          <span className="item" style={{ '--i': 3 }}></span>
          <img
            className="item"
            src="https://th.bing.com/th/id/OIP.ErLt-pjuGad94L-_bu1CYgHaGL?w=219&h=184&c=7&r=0&o=5&pid=1.7"
            style={{ '--i': 4 }}
            alt=""
          />
          <img
            className="item"
            src="https://th.bing.com/th/id/OIP.hMEof5CObAgDETy---FEfgHaEK?w=303&h=180&c=7&r=0&o=5&pid=1.7"
            style={{ '--i': 10 }}
            alt=""
          />
          <span className="item" style={{ '--i': 11 }}></span>
          <img
            className="item"
            src="https://th.bing.com/th/id/OIP.UBEZyAqYkr05a1tbVyIROQHaE8?w=225&h=187&c=7&r=0&o=5&pid=1.7"
            style={{ '--i': 12 }}
            alt=""
          />
          <span className="item" style={{ '--i': 5 }}></span>
          <span className="item" style={{ '--i': 9 }}></span>
          <img
            className="item"
            src="https://th.bing.com/th/id/OIP.4zMNOJTpirwkGidlMnpEpQHaGn?w=184&h=180&c=7&r=0&o=5&pid=1.7"
            style={{ '--i': 8 }}
            alt=""
          />
          <span className="item" style={{ '--i': 7 }}></span>
          <img
            className="item"
            src="https://th.bing.com/th/id/OIP.R3tXkVUuuHQMmNWjEVdjZwHaGE?w=231&h=189&c=7&r=0&o=5&pid=1.7"
            style={{ '--i': 6 }}
            alt=""
          />
        </div>
      </section>

      <section className="card-container" id="card-container">
        <div className="slider">
          <div className="card" data-tilt>
            <div className="content">
              <img src="https://i.pinimg.com/236x/30/ce/aa/30ceaa495a034bca77ca7f5c171013ed.jpg" alt="" />
              <h1>Personalized Working proffesionals</h1>
              <p>
              “Empowering communities by connecting those in need with opportunities, our home service app is a beacon of hope for those seeking to uplift their lives through meaningful work.”
              </p>
            </div>
          </div>
          {/* Repeat the card structure for other cards */}
        </div>

        <ul className="control" id="custom-control">
          <li className="prev">
            <ion-icon className="arrow" name="caret-back-outline"></ion-icon>
          </li>
          <li className="next">
            <ion-icon className="arrow" name="caret-forward-outline"></ion-icon>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Frontpage;

