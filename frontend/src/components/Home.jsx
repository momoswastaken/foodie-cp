import React from "react";
import { useState } from "react";
import "../index.css";

import Login from "./Login";

import homeImg from "../img/home.png";
import aboutImg from "../img/about.png";

import foodImg from "../img/food1.png";
import food2 from "../img/food2.png";
import food3 from "../img/food3.png";

import orderFood from "../img/orderfood.jpg";
import boxImg from "../img/box.png";

import shippingImg from "../img/shipping.png";
import deliverImg from "../img/deliver.png";

import {
  BsGithub,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsList,
} from "react-icons/bs";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <header>
        <a href="#" className="logo">
          OOOGA BOOGA
        </a>
        <div
          className={`bx bx-menu ${menuOpen ? "open" : ""}`}
          id="menu-icon"
          onClick={toggleMenu}
        >
          <BsList />
        </div>
        <ul className={`navbar ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#" onClick={handleMenuClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#menu" onClick={handleMenuClick}>
              Menu
            </a>
          </li>
          <li>
            <a href="#order" onClick={handleMenuClick}>
              Order
            </a>
          </li>
          <li>
            <a href="#service" onClick={handleMenuClick}>
              Service
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleMenuClick}>
              Contact
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleMenuClick}>
              About
            </a>
          </li>
          <li>
            <a href="/login" onClick={handleMenuClick}>
              Login
            </a>
          </li>
        </ul>
      </header>

      <section className="home" id="home">
        <div className="home-text">
          <h1>Taste the tradition!</h1>
          <h2>
            Authentic South Indian flavors await at Shripad Idli Centre
            <br />
          </h2>
          <a href="#" className="button">
            Learn More
          </a>
        </div>
        <div className="home-img">
          <img src={homeImg} alt="Home" />
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-img">
          <img src={aboutImg} alt="About" />
        </div>
        <div className="about-text">
          <h2>
            Discover Shripad Idli Centre <br />
          </h2>
          <p>
            Welcome to Shripad Idli Centre, where tradition meets taste!
            Established with a passion for delivering authentic South Indian
            flavors, we take pride in offering delicious and freshly prepared
            idlis, dosas, and a variety of other mouthwatering dishes. Our
            journey began with a commitment to preserving the rich culinary
            heritage of South India while delighting taste buds with every bite.
            At Shripad Idli Centre, we blend age-old recipes with modern
            culinary techniques to serve you an unforgettable dining experience.
          </p>
          <a href="#" className="button">
            Join Us
          </a>
        </div>
      </section>

      <section className="menu" id="menu">
        <div className="heading">
          <h1>Our Menu</h1>
        </div>
        <div className="menu-container">
          <div className="box">
            <div className="box-img">
              <img src={foodImg} alt="Chicken Burger" />
            </div>
            <h2>ITEM 1</h2>
            <h3>Idli</h3>
            <span>Rs. 110.00</span>
            <i className="bx bx-cart"></i>
          </div>

          <div className="box">
            <div className="box-img">
              <img src={food2} alt="Special Veg Burger" />
            </div>
            <h2>ITEM 2</h2>
            <h3>Idli</h3>
            <span>Rs. 110.00</span>
            <i className="bx bx-cart"></i>
          </div>

          <div className="box">
            <div className="box-img">
              <img src={food3} alt="Chicken Fry Pack" />
            </div>
            <h2>ITEM 3</h2>
            <h3>Idli</h3>
            <span>Rs. 110.00</span>
            <i className="bx bx-cart"></i>
          </div>
        </div>
      </section>

      <section className="order" id="order">
        <div className="order-text">
          <h2>Are you hungry?</h2>
          <h1>Don't wait!</h1>
          <p>Let start to order food now</p>
          <a href="#" className="button">
            Order Now
          </a>
        </div>
        <div className="order-img">
          <img src={orderFood} alt="Order Food" />
        </div>
      </section>

      <section className="service" id="service">
        <div className="heading">
          <h1>Services</h1>
          <h2>We provide best quality food</h2>
        </div>
        <div className="service-container">
          <div className="s-box">
            <img src={boxImg} alt="Order" />
            <h3>Order</h3>
            <p>
              A full display of menu items and billing features make it easier
              for the customers to order food
            </p>
          </div>

          <div className="s-box">
            <img src={shippingImg} alt="Shipping" />
            <h3>Shipping</h3>
            <p>Your order has been shipped, it will reach you in a while</p>
          </div>

          <div className="s-box">
            <img src={deliverImg} alt="Delivered" />
            <h3>Delivered</h3>
            <p>
              Your order has reached to you please don't forget to give your
              feedback
            </p>
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <h2>
          We make quality food <br />
          Everyday
        </h2>
        <a href="#" className="button">
          Let's Talk
        </a>
      </section>

      <section id="contact">
        <div className="footer">
          <div className="main">
            <div className="col">
              <h4>Menu Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#menu">Menu</a>
                </li>
                <li>
                  <a href="#order">Order</a>
                </li>
                <li>
                  <a href="#service">Service</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Food Delivery</a>
                </li>
                <li>
                  <a href="#">Quality Food</a>
                </li>
                <li>
                  <a href="#">Cart Service</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4>Information</h4>
              <ul>
                <li>
                  <a href="#about">About US</a>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4>Contact Us</h4>
              <div className="social-icons">
                <a href="https://www.facebook.com">
                  <BsFacebook />
                </a>
                <a href="https://www.twitter.com">
                  <BsTwitter />
                </a>
                <a href="https://www.instagram.com">
                  <BsInstagram />
                </a>
                <a href="https://www.youtube.com">
                  <BsYoutube />
                </a>
                <a href="https://www.github.com">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
