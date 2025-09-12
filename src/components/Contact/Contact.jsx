// src/components/Contact/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ys1sdhk",  
        "template_acsn8cc",  
        form.current,
        "W_-RFVKdJxWEcuJDX"  
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="contact-title">
        <h2>CONTACT</h2>
        <div className="title-underline"></div>
        <p>I’d love to hear from you—reach out for any opportunities or questions!</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h3>Connect With Me <span>🚀</span></h3>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          {/* Updated field names to match EmailJS template */}
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" rows="4" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
