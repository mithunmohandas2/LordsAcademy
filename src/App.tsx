import SubPage from "./Pages/SubPage";
import Home from "./Pages/Home"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/EGGS Life" element={<SubPage location={"EggsLife"} />} />
      </Routes>
    </>
  )
}

export default App
