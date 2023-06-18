import React from "react";
import "./Home.css";
import Nav from "../../Component/Nav/Nav";
import Resume from "../../Component/Resume/Resume";
export default function Home() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
    console.log(darkMode);
  }

  return (
    <main>
      <Nav darkMode={darkMode} />
      <Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </main>
  );
}
