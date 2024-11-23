import SubPage from "./Pages/SubPageLayout";
import Home from "./Pages/Home"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<SubPage location={"contact"} />} />
        <Route path="/admission" element={<SubPage location={"admission"} />} />
        <Route path="/fee" element={<SubPage location={"fee"} />} />
        <Route path="/Principal" element={<SubPage location={"Principal"} />} />
        <Route path="/Manager" element={<SubPage location={"Manager"} />} />
        <Route path="/Management" element={<SubPage location={"Management"} />} />
        <Route path="/CMI" element={<SubPage location={"CMI"} />} />
        <Route path="/OurCampus" element={<SubPage location={"OurCampus"} />} />
        <Route path="/Faculty" element={<SubPage location={"Faculty"} />} />

        <Route path="/CurricularActivities" element={<SubPage location={"CurricularActivities"} />} />
        <Route path="/CoCurricularActivities" element={<SubPage location={"CoCurricularActivities"} />} />
        <Route path="/Infrastructure" element={<SubPage location={"Infrastructure"} />} />
        <Route path="/Library" element={<SubPage location={"Library"} />} />
        <Route path="/Transport" element={<SubPage location={"Transport"} />} />
        <Route path="/ComputerLab" element={<SubPage location={"ComputerLab"} />} />
        
        {/* dummy subpages */}
        {/* <Route path="/student_login" element={<SubPage location={"student_login"} />} />
        <Route path="/blog" element={<SubPage location={"blog"} />} />
        <Route path="/CurricularActivities" element={<SubPage location={"CurricularActivities"} />} />
        <Route path="/Park" element={<SubPage location={"Park"} />} />
        <Route path="/PhotoGallery" element={<SubPage location={"PhotoGallery"} />} />
        <Route path="/VideoGallery" element={<SubPage location={"VideoGallery"} />} />
        <Route path="/ExtraPage" element={<SubPage location={"ExtraPage"} />} /> */}

        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
