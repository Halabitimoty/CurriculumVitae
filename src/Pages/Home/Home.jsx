import React from "react";
import "./Home.css";
import logo from "../../logo.svg";

export default function Home() {
  const [change, setChange] = React.useState(true);
  const darkmode = {
    backgroundColor: "#282c34",
    color: "white",
  };

  const lightmode = {
    backgroundColor: "white",
    color: "#282c34",
  };

  function handleChange() {
    setChange((prevColor) => !prevColor);
  }
  return (
    <main style={change ? darkmode : lightmode}>
      <header>
        <img src={logo} alt="logo" />
        <h1>ReactFacts</h1>
        <div className="color-change">
          <p>Light</p>
          <div className="change-color" onClick={handleChange}>
            <div></div>
            <div></div>
          </div>
          <p>Dark</p>
        </div>
      </header>
      <div className="React-Facts">
        <h2>Fun facts about React</h2>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </main>
  );
}
