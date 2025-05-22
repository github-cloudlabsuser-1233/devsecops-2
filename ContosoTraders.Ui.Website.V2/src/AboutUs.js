import React from "react";
import "./App.css";

function AboutUs() {
  return (
    <div className="container">
      <h1 className="text-center mt-5 pb-4">About Us</h1>
      <p>
        Welcome to Contoso Traders! We are a leading e-commerce company dedicated to providing the best online shopping experience. Our platform is built with modern technologies, ensuring security, reliability, and a seamless user experience.
      </p>
      <p>
        Our mission is to empower customers with a wide range of products, exceptional service, and innovative solutions. We embrace DevOps and DevSecOps practices to deliver high-quality software and maintain the trust of our users.
      </p>
      <h3>Our Values</h3>
      <ul>
        <li>Customer Focus</li>
        <li>Innovation</li>
        <li>Security</li>
        <li>Reliability</li>
        <li>Continuous Improvement</li>
      </ul>
      <h3>Contact Us</h3>
      <p>Email: support@contosotraders.com</p>
      <p>Phone: +1 (800) 123-4567</p>
    </div>
  );
}

export default AboutUs;
