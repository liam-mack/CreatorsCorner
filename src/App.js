import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Events from "./pages/Events/Events";
import Apply from "./pages/Apply/Apply";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Events" component={Events} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Apply" component={Apply} />
        <Route exact path="/Projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
