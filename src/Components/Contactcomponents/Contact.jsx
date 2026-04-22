import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w0msq43",
        "template_i4voigd",
        form.current,
        "1e1Vb3_Ph4XybfRIw",
      )
      .then(() => {
        setStatus("Message sent successfully ");
      });
    form.current.reset();
    setTimeout(() => {
      setStatus("");
    }, 3000).catch(() => {
      setStatus("Failed to send message ");
    });
  };

  return (
    <>
      <section id="Contact-section">
        <div className="Contact-container">
          <div className="Contact-texts">
            <h2>Get In Touch</h2>
            <p>
              Have a project in mind or want to collaborate? Or just a
              conversation? I’d love to hear from you. Let’s build something
              meaningful together.
            </p>
          </div>
          <div className="Contact-card-container">
            <div className="Contact-left">
              <h2>Let's Connect</h2>
              <p>
                I’m always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, I’ll try my best to get back to you!
              </p>
              <div className="contact-item">
                <div className="icon-box">
                  <img
                    src="/email-white.png"
                    alt="Email-icon"
                    className="Contact-icon"
                  />
                </div>
                <div className="contact-info">
                  <h4>Email</h4>
                  <span>ochemeblessingehi@gmail.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box">
                  <img
                    src="/call.png"
                    alt="call-icon"
                    className="Contact-icon"
                  />
                </div>
                <div className="contact-info">
                  <h4>Phone</h4>
                  <span>+234 7038484521</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box">
                  <img
                    src="/location.png"
                    alt="location-icon"
                    className="Contact-icon"
                  />
                </div>
                <div className="contact-info">
                  <h4>Location</h4>
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
            <div className="Contact-card">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="contact-form"
                action=""
              >
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input"
                />

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="input"
                />
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  className="input message"
                  rows="5"
                ></textarea>

                <button type="submit" className="button">
                  Send Message
                </button>
                {status && <p className="success-message">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
