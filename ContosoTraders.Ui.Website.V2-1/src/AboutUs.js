import React from 'react';
import './App.css';

const AboutUs = () => {
  return (
    <div className="container text-center mt-5 pb-4">
      <h1>About Us</h1>
      <h3>Welcome to Contoso Traders</h3>
      <p>
        At Contoso Traders, we are committed to providing the best products and services to our customers. Our team is dedicated to ensuring customer satisfaction and delivering quality at every step.
      </p>
      <p>
        Founded in [Year], we have grown to become a trusted name in the industry, known for our innovation and excellence. Our mission is to [insert mission statement or core values].
      </p>
      <h3>Our Values</h3>
      <ul>
        <li>Integrity</li>
        <li>Customer Focus</li>
        <li>Innovation</li>
        <li>Teamwork</li>
      </ul>
      <h3>Contact Us</h3>
      <p>If you have any questions or would like to learn more about us, feel free to reach out!</p>
    </div>
  );
};

export default AboutUs;