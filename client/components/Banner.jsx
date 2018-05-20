import React from 'react';
import style from '../style.css';

const Banner = () => (
  <div className="signup_banner">
    <img className="nationwide_logo" src="/assets/nationwide_logo.png" />
    <h2 className="banner_header">
The Nationwide Buddy System
    </h2>
    <p className="banner_description">
The strength of a community lies in its people. When diasters strike, the Nationwide community is ready to help each other recover and rebuild.
    </p>
    <button className="banner_reg_button" type="button">Register</button>
  </div>
);

module.exports = Banner;

