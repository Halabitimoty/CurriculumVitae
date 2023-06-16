import React from "react";
import "./Home.css";
import Nav from "../../Component/Nav/Nav";
export default function Home() {
  return (
    <main>
      <Nav />
      <div className="resume">
        <div className="name"></div>
        <div className="summry"></div>
        <div className="experience"></div>
        <div className="projects"></div>
      </div>
    </main>
  );
}
