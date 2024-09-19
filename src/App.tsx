import SubPage from "./Pages/SubPage";
import Home from "./Pages/Home"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/EGGS Life" element={<SubPage location={"EGGS Life"} />} />
        {/* Add new routes in the format above with path */}
      </Routes>
    </>
  )
}

export default App
