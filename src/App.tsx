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
        <Route path="/CMI" element={<SubPage location={"CMI"} />} />
        <Route path="/CoCurricularActivities" element={<SubPage location={"CoCurricularActivities"} />} />
        <Route path="/CurricularActivities" element={<SubPage location={"CurricularActivities"} />} />
        <Route path="/CurricularActivities" element={<SubPage location={"CurricularActivities"} />} />
        <Route path="/Faculty" element={<SubPage location={"Faculty"} />} />
        <Route path="/Infrastructure" element={<SubPage location={"Infrastructure"} />} />
        <Route path="/Library" element={<SubPage location={"Library"} />} />
        <Route path="/Management" element={<SubPage location={"Management"} />} />
        <Route path="/Manager" element={<SubPage location={"Manager"} />} />
        <Route path="/OurCampus" element={<SubPage location={"OurCampus"} />} />
        <Route path="/Park" element={<SubPage location={"Park"} />} />
        <Route path="/PhotoGallery" element={<SubPage location={"PhotoGallery"} />} />
        <Route path="/Principal" element={<SubPage location={"Principal"} />} />
        <Route path="/Transport" element={<SubPage location={"Transport"} />} />
        <Route path="/VideoGallery" element={<SubPage location={"VideoGallery"} />} />

        <Route path="/ExtraPage" element={<SubPage location={"ExtraPage"} />} />
      </Routes>
    </>
  )
}

export default App
