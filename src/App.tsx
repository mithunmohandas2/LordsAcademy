import SubPage from "./Pages/SubPageLayout";
import Home from "./Pages/Home"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<SubPage location={"blog"} />} />
        <Route path="/contact" element={<SubPage location={"contact"} />} />

        {/* dummy subpages */}
        <Route path="/page1" element={<SubPage location={"page1"} />} />
        <Route path="/page2" element={<SubPage location={"page2"} />} />
        <Route path="/page3" element={<SubPage location={"page3"} />} />
        <Route path="/page4" element={<SubPage location={"page4"} />} />
      </Routes>
    </>
  )
}

export default App
