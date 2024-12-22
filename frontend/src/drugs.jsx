/* eslint-disable no-unused-vars */
import React from 'react'

function drugs() {
  return (
    <div>
        <header>
    <a href="#" className="logo">
      <span>D</span>rugs<span>A</span>ddiction
    </a>
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#doctor">Doctor</a>
        </li>
        <li>
          <a href="#review">Review</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
      </ul>
    </nav>
    <div className="fas fa-bars" />
  </header>
  <section id="home" className="home">
    <div className="row">
      <div className="images">
        <img
          src="https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/home.png"
          alt=""
        />
      </div>
      <div className="content">
        <h1>
          <span>Stay</span> Safe, <span>Stay</span> Healthy.
        </h1>
        <p>National Drug addiction</p>
        <a href="#">
          <button className="button">Read More</button>
        </a>
      </div>
    </div>
  </section>
  <section id="about" className="about">
    <h1 className="heading">About our Facility</h1>
    <h1 className="title">Learn and explore our facility</h1>
    <div className="box-container">
      <div className="box">
        <div className="images">
          <img
            src="https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/about-1.png"
            alt=""
          />
        </div>
        <div className="content">
          <h3>ambulance services</h3>
          <a href="#">
            <button className="button">Learn more</button>
          </a>
        </div>
      </div>
      <div className="box">
        <div className="images">
          <img
            src="https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/about-2.png"
            alt=""
          />
        </div>
        <div className="content">
          <h3>Emergency rooms</h3>
          <a href="#">
            <button className="button">Learn more</button>
          </a>
        </div>
      </div>
      <div className="box">
        <div className="images">
          <img
            src="https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/about-3.png"
            alt=""
          />
        </div>
        <div className="content">
          <h3>free check-ups</h3>
          <a href="#">
            <button className="button">Learn more</button>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section id="doctor" className="card">
    <div className="container">
      <h1 className="heading">doctors</h1>
      <h3 className="title">our professional doctors</h3>
      <div className="box-container">
        <div className="box">
          <img
            src="https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/doctor-1.jpg"
            alt=""
          />
          <div className="content">
            <a href="#">
              <h2>john doe</h2>
            </a>
            <p>professional</p>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
            </div>
          </div>
        </div>
        <div className="box">
          <img
            src="https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/doctor-2.jpg"
            alt=""
          />
          <div className="content">
            <a href="#">
              <h2>john doe</h2>
            </a>
            <p>professional</p>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
            </div>
          </div>
        </div>
        <div className="box">
          <img
            src="https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/doctor-3.jpg"
            alt=""
          />
          <div className="content">
            <a href="#">
              <h2>john doe</h2>
            </a>
            <p>professional</p>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="review" className="review">
    <h1 className="heading">our patient review</h1>
    <h3 className="title">what patient says about us</h3>
    <div className="box-container">
      <div className="box">
        <i className="fas fa-quote-left" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ea
          placeat dicta dolore odit illo libero laudantium velit, iure officia.
        </p>
        <div className="images">
          <img
            src="https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/img-1.jpg"
            alt=""
          />
          <div className="info">
            <h3>john doe</h3>
            <span>date : 11 2024</span>
          </div>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-quote-left" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ea
          placeat dicta dolore odit illo libero laudantium velit, iure officia.
        </p>
        <div className="images">
          <img
            src="https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/img-2.jpg"
            alt=""
          />
          <div className="info">
            <h3>john doe</h3>
            <span>date : 11 2024</span>
          </div>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-quote-left" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ea
          placeat dicta dolore odit illo libero laudantium velit, iure officia.
        </p>
        <div className="images">
          <img
            src="https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/img-3.jpg"
            alt=""
          />
          <div className="info">
            <h3>john doe</h3>
            <span>date : 11 2024</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" className="contact">
    <h1 className="heading">contact us</h1>
    <h3 className="title">you can talk to us any times,</h3>
    <div className="row">
      <div className="images">
        <img
          src="https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/form.png"
          alt=""
        />
      </div>
      <div className="form-container">
        <input type="text" placeholder="full name" />
        <input type="email" placeholder="enter your email" />
        <input type="number" placeholder="phone number" />
        <textarea cols={30} rows={10} defaultValue={""} />
        <input type="submit" defaultValue="send" />
      </div>
    </div>
  </section>
  <section id="blog" className="blog">
    <h1 className="heading">blog</h1>
    <h3 className="title">Lorem ipsum dolor sit amet.</h3>
    <div className="box-container">
      <div className="box">
        <img
          src="https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/blog 1.png"
          alt=""
        />
        <div className="content">
          <a href="#">
            <h2>diabetes</h2>
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            delectus sunt molestiae quibusdam inventore optio.
          </p>
          <a href="#">
            <button className="button">learn more</button>
          </a>
        </div>
      </div>
      <div className="box">
        <img
          src="https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/blog 2.png"
          alt=""
        />
        <div className="content">
          <a href="#">
            <h2>covid-19 vaccine</h2>
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            delectus sunt molestiae quibusdam inventore optio.
          </p>
          <a href="#">
            <button className="button">learn more</button>
          </a>
        </div>
      </div>
      <div className="box">
        <img
          src="https://raw.githubusercontent.com/farazc60/Project-Images/main/hospital/assets/blog 3.png"
          alt=""
        />
        <div className="content">
          <a href="#">
            <h2>prevent epidemic</h2>
          </a>
          <a href="#">
            <button className="button">learn more</button>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="footer">
    <div className="box">
      <h2 className="logo">
        <span>D</span>octors <span>C</span>ares
      </h2>
    </div>
    <div className="box">
      <h2 className="logo">
        <span>s</span>hare
      </h2>
      <a href="#">facebook</a>
      <a href="#">twitter</a>
      <a href="#">instagram</a>
      <a href="#">pinterest</a>
    </div>
    <div className="box">
      <h2 className="logo">
        <span>L</span>inks
      </h2>
      <a href="#home">home</a>
      <a href="#about">about</a>
      <a href="#doctor">doctor</a>
      <a href="#review">review</a>
      <a href="#blog">blog</a>
    </div>
    <h1 className="credit">
      created by <span>bharadwaja sahoo</span> all rights reserved!
    </h1>
  </section>
      
    </div>
  )
}

export default drugs
