import React from 'react';
import '../assets/Style/Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>Have a question, idea, or collaboration in mind? Fill out your details below and I'll get back to you shortly!</p>
        </div>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="you@example.com" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your message..." required />

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}
