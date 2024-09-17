import EggsLife from "./Pages/EggsLife";
import Home from "./Pages/Home"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/EggsLife" element={<EggsLife />} />
      </Routes>
    </>
  )
}

export default App
