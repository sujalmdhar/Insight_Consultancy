import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Combcomp from "./components/Combcomp";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.body.style.backgroundColor = "#FFFFFF";
    } else { 
      setTheme("dark");
      document.body.style.backgroundColor = "rgb(19 24 29)";
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar mode={theme} toggleTheme={toggleTheme} />
        
        <div className="container">
          <Routes>
            {" "}
            <Route
              path="/RideQuest"
              element={<Combcomp mode={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/Combcomp"
              element={<Combcomp mode={theme} toggleTheme={toggleTheme} />}
            />
            <Route path="/Home" element={<Home mode={theme} />} />
            <Route path="/Aboutus" element={<Aboutus mode={theme} />} />
            <Route path="/Contactus" element={<Contactus mode={theme} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
