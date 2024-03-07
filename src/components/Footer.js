import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  // to download the document
  const handleDownload = () => {
    const documentUrl = process.env.PUBLIC_URL + "/Document/KENBRA LIMITED FINAL.pdf"
    window.open(documentUrl, "_blank");
  };

  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Pages</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">Mission</Link>
            <Link to="/about">Vision</Link>
            <Link to="/about">Purpose</Link>
            <Link to="/about">Our Core Values</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Our Services</h2>
            <Link                    onClick={handleDownload}>Capability Statement</Link>
            <Link onClick={handleDownload}>Consultancy Services</Link>
            <Link onClick={handleDownload}>Training & Programmes</Link>
            <Link onClick={handleDownload}>
              Supervison of Consultancy Assignments
            </Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>

            <Link
              to={"mailto:chelangatemmaculat244@gmail.com"}
              target="_blank"
              aria-label="Email"
            >
              Email:kenbralimited@gmail.com
            </Link>

            <Link to={"tel:+254758484550"} target="_blank" aria-label="Phone">
              Phone1:0722289371
            </Link>
            <Link to={"tel:+254758484550"} target="_blank" aria-label="Phone">
              Phone2:0722839975
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              KENBRA <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">kenbra &copy; 2024</small>
          <div className="social-icons">
            <Link
              className="social-icon-link email"
              to={"mailto:kenbralimited@gmail.com"}
              target="_blank"
              aria-label="Email"
            >
              <i className="fa fa-envelope" />
            </Link>

            <Link
              className="social-icon-link phone"
              to={"tel:+254722839975"}
              target="_blank"
              aria-label="Phone"
            >
              <i className="fa fa-phone" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;
