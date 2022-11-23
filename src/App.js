import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./screens/Marketing/AboutUs";
import Contactpage from "./screens/Marketing/Contactpage";
import Homepage from "./screens/Marketing/Homepage";
import TechnicalHomepage from "./screens/Technical/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Homepage" element={<TechnicalHomepage />} />
        {/* <Route path="/ProjectInfo/:projectIndex" element={<ProjectInfo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
