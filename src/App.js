import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./screens/AboutUs";
import Contactpage from "./screens/Contactpage";
import Homepage from "./screens/Homepage";
import ContentWritingService from "./screens/Marketing/Services/ContentWritingService";
import GraphicDesigningService from "./screens/Marketing/Services/GraphicDesigningService";
import SeoService from "./screens/Marketing/Services/SeoService";
import SmoService from "./screens/Marketing/Services/SmoService";
import VideoEditingService from "./screens/Marketing/Services/VideoEditingService";
import VideoProductionService from "./screens/Marketing/Services/VideoProductionService";
import CMSDevelopmentService from "./screens/Technical/Services/CMSDevelopmentService";
import CRMDevelopmentService from "./screens/Technical/Services/CRMDevelopmentService";
import MobileDevelopmentService from "./screens/Technical/Services/MobileDevelopmentService";
import WebDevelopmentService from "./screens/Technical/Services/WebDevelopmentService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contentwriting" element={<ContentWritingService />} />
        <Route path="/graphicdesigning" element={<GraphicDesigningService />} />
        <Route path="/seo" element={<SeoService />} />
        <Route path="/smo" element={<SmoService />} />
        <Route path="/videoediting" element={<VideoEditingService />} />
        <Route path="/videoproduction" element={<VideoProductionService />} />
        <Route
          path="/mobiledevelopment"
          element={<MobileDevelopmentService />}
        />
        <Route path="/webdevelopment" element={<WebDevelopmentService />} />
        <Route path="/crmdevelopment" element={<CRMDevelopmentService />} />
        <Route path="/cmsdevelopment" element={<CMSDevelopmentService />} />
        {/* <Route path="/ProjectInfo/:projectIndex" element={<ProjectInfo />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
