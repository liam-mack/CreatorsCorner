import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Citadel from "./pages/Projects/Citadel/Citadel";
import Rainbow from "./pages/Projects/Rainbow/Rainbow";
import OCH from "./pages/Projects/OCH/OCH";
import OCRCC from "./pages/Projects/OCRCC/OCRCC";
import Interval from "./pages/Projects/Interval/Interval";
import CTSACT from "./pages/Projects/CTSACT/CTSACT";
import FoE from "./pages/Projects/FoE/FoE";
import ARC from "./pages/Projects/ARC/ARC";
import Events from "./pages/Events/Events";
import Apply from "./pages/Apply/Apply";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      once: true
    });
    // AOS.refresh();
  }, []);

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
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Projects-Citadel" component={Citadel} />
        <Route exact path="/Projects-Rainbow" component={Rainbow} />
        <Route exact path="/Projects-OCH" component={OCH} />
        <Route exact path="/Projects-OCRCC" component={OCRCC} />
        <Route exact path="/Projects-Interval" component={Interval} />
        <Route exact path="/Projects-CTSACT" component={CTSACT} />
        <Route exact path="/Projects-FOE" component={FoE} />
        <Route exact path="/Projects-ARC" component={ARC} />
      </div>
    </Router>
  );
}

export default App;
