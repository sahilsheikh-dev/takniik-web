import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./screens/AboutUs";
import Contactpage from "./screens/Contactpage";
import Homepage from "./screens/Homepage";
import TechnicalHomepage from "./screens/TechnicalHomepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/technicalHomepage" element={<TechnicalHomepage />} />
        {/* <Route path="/ProjectInfo/:projectIndex" element={<ProjectInfo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
