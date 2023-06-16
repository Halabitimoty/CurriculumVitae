import React from "react";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Hardskill from "../Hardskill/Hardskill";
import Softskill from "../Softskill/Softskill";
import Certificate from "../Certificate/Certificate";
import Language from "../Language/Language";
import User from "../../assets/user.jpg";

function Nav() {
  return (
    <nav className="nav">
      <img src={User} alt="" className="hero" />
      <Contact />
      <Education />
      <Hardskill />
      <Softskill />
      <Certificate />
      <Language />
    </nav>
  );
}

export default Nav;
