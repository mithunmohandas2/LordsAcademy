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
        <Route path="/admission" element={<SubPage location={"admission"} />} />
        <Route path="/fee" element={<SubPage location={"fee"} />} />
        <Route path="/student_login" element={<SubPage location={"student_login"} />} />
        <Route path="/page4" element={<SubPage location={"page4"} />} />
      </Routes>
    </>
  )
}

export default App
