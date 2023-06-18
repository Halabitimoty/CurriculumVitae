import React from "react";
import "./Resume.css";

function Resume(props) {
  return (
    <div className="resume">
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
      <div className="name">
        <h1>Alabi Timothy O.</h1>
        <p>Software Developer</p>
      </div>
      <div className="summary">
        <h3>PROFESSIONAL SUMMARY</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          voluptate exercitationem recusandae ullam voluptates quas, totam
          nesciunt beatae odio, eius odit. Hic, molestias! Rem assumenda quo
          necessitatibus quibusdam nesciunt voluptates!
        </p>
      </div>
      <div className="experience">
        <h3>Work Experience</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse optio
          facilis vitae officia, ullam itaque obcaecati, maxime eos ipsam
          accusamus deleniti autem. Perspiciatis voluptate ut facilis dolore
          quibusdam, consectetur blanditiis!
        </p>
      </div>
      <div className="projects">
        <h3>Notable Projects</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
          labore, doloribus saepe exercitationem architecto earum corrupti
          necessitatibus adipisci explicabo pariatur magnam ex deserunt ut
          consequuntur, nulla reiciendis. Deserunt, illo qui?
        </p>
      </div>
    </div>
  );
}

export default Resume;
