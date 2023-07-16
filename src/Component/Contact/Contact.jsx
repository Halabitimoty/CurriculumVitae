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
        <a href="mailto:Halabitimoty@yahoo.com">Halabitimoty@yahoo.com</a>
      </p>
      <p>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/halabitimoty"
        >
          Halabitimoty
        </a>
      </p>
      <p>
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/halabitimoty"
        >
          Halabitimoty
        </a>
      </p>
      <p>
        <i class="fa fa-globe" aria-hidden="true"></i>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://halabitimoty.netlify.app"
        >
          website
        </a>
      </p>
      <p>
        <i class="fa fa-github" aria-hidden="true"></i>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Halabitimoty"
        >
          Halabitimoty
        </a>
      </p>
    </div>
  );
}

export default Contact;
