import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <section className="contact-us-section" id="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </section>
  );
}

export default ContactUs;
