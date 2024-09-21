import SubPage from "./Pages/SubPage";
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
      </Routes>
    </>
  )
}

export default App
