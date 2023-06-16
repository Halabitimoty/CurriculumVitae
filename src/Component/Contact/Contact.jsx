import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>CONTACTS</h2>
      <p>
        <i class="fa fa-address-book" aria-hidden="true"></i>
        <span> +2348126341035</span>
      </p>

      <p>
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <span>Halabitimothy@yahoo.com</span>
      </p>
      <p>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <span>Halabitimoty</span>
      </p>
      <p>
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        <span>Halabitimoty</span>
      </p>
      <p>
        <i class="fa fa-globe" aria-hidden="true"></i>
        <span>Coming soon...</span>
      </p>
      <p>
        <i class="fa fa-github" aria-hidden="true"></i>
        <span>Halabitimoty</span>
      </p>
    </div>
  );
}

export default Contact;
